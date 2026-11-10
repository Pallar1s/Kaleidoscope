import { expect, test } from '@playwright/test'

test('all shaders compile and feedback stays frozen while paused', async ({ page }) => {
  const consoleErrors = []
  page.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })

  await page.goto('/')
  const canvas = page.getByLabel('Interactive pixel shader')
  await expect(canvas).toBeVisible()
  await page.getByRole('button', { name: 'Open settings' }).click()

  const shaderSelect = page.getByRole('combobox', { name: 'Shader effect' })
  const shaderNames = await shaderSelect.locator('option').allTextContents()
  await page.getByRole('button', { name: 'Play animation' }).click()

  for (const shaderName of shaderNames) {
    await shaderSelect.selectOption({ label: shaderName })
    await expect(canvas).toHaveAttribute('data-active-effect', shaderName)
    await page.waitForTimeout(100)
    await expect(page.locator('[role="alert"]')).toHaveCount(0)

    const webglState = await canvas.evaluate(element => {
      const gl = element.getContext('webgl2')
      return {
        available: Boolean(gl),
        contextLost: gl?.isContextLost() ?? true,
        error: gl?.getError() ?? -1,
        pixels: element.width * element.height
      }
    })
    expect(webglState.available, `${shaderName}: WebGL 2 unavailable`).toBe(true)
    expect(webglState.contextLost, `${shaderName}: context lost`).toBe(false)
    expect(webglState.error, `${shaderName}: unexpected WebGL error`).toBe(0)
    expect(webglState.pixels).toBeLessThanOrEqual(2_073_600)
  }

  await shaderSelect.selectOption({ label: 'fluidSim' })
  await page.waitForTimeout(250)
  await page.getByRole('button', { name: 'Pause animation' }).click()
  await page.waitForTimeout(50)
  const frameBefore = await canvas.getAttribute('data-shader-frame')
  const box = await canvas.boundingBox()
  expect(box).not.toBeNull()
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
  await page.mouse.down()
  await page.mouse.move(box.x + box.width / 2 - 100, box.y + box.height / 2 + 100)
  await page.waitForTimeout(150)
  await page.mouse.up()
  await page.waitForTimeout(50)
  expect(await canvas.getAttribute('data-shader-frame')).toBe(frameBefore)

  expect(consoleErrors.filter(message => /Shader error|Framebuffer is incomplete|WebGL error/i.test(message))).toEqual([])
})

test('renderer recovers after WebGL context loss', async ({ page }) => {
  await page.goto('/')
  const canvas = page.getByLabel('Interactive pixel shader')
  await expect(canvas).toBeVisible()

  const extensionAvailable = await canvas.evaluate(element => {
    const gl = element.getContext('webgl2')
    window.__contextLossExtension = gl?.getExtension('WEBGL_lose_context')
    window.__contextLossExtension?.loseContext()
    return Boolean(window.__contextLossExtension)
  })
  test.skip(!extensionAvailable, 'WEBGL_lose_context is unavailable')

  await expect(page.getByRole('alert')).toContainText('WebGL context was lost')
  await page.evaluate(() => window.__contextLossExtension.restoreContext())
  await expect(page.locator('[role="alert"]')).toHaveCount(0, { timeout: 10_000 })
  await expect.poll(() => canvas.evaluate(element => element.getContext('webgl2').isContextLost())).toBe(false)
  await expect(canvas).toHaveAttribute('data-active-effect', /.+/)
})
