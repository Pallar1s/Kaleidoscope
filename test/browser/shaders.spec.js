import { expect, test } from '@playwright/test'

test('all shaders compile and feedback stays frozen while paused', async ({ page }) => {
  test.setTimeout(120_000)
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

  // Keep the app paused while compiling: continuously rendering every heavy
  // shader under CI's software GPU can starve the browser's animation loop.
  for (const shaderName of shaderNames) {
    await shaderSelect.selectOption({ label: shaderName })
    await expect(canvas).toHaveAttribute('data-active-effect', shaderName, { timeout: 20_000 })
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
  await expect(canvas).toHaveAttribute('data-active-effect', 'fluidSim', { timeout: 20_000 })
  await page.getByRole('button', { name: 'Play animation' }).click()
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

  const fluidSampler = await canvas.evaluate(element => {
    const gl = element.getContext('webgl2')
    gl.activeTexture(gl.TEXTURE0)
    const sampler = gl.getParameter(gl.SAMPLER_BINDING)
    if (!sampler) return null
    return {
      minFilter: gl.getSamplerParameter(sampler, gl.TEXTURE_MIN_FILTER),
      magFilter: gl.getSamplerParameter(sampler, gl.TEXTURE_MAG_FILTER),
      wrapS: gl.getSamplerParameter(sampler, gl.TEXTURE_WRAP_S),
      wrapT: gl.getSamplerParameter(sampler, gl.TEXTURE_WRAP_T),
      linear: gl.LINEAR,
      repeat: gl.REPEAT
    }
  })
  expect(fluidSampler).not.toBeNull()
  expect(fluidSampler).toEqual({
    minFilter: fluidSampler.linear,
    magFilter: fluidSampler.linear,
    wrapS: fluidSampler.repeat,
    wrapT: fluidSampler.repeat,
    linear: fluidSampler.linear,
    repeat: fluidSampler.repeat
  })

  await shaderSelect.selectOption({ label: 'balls' })
  await expect(canvas).toHaveAttribute('data-active-effect', 'balls', { timeout: 20_000 })
  expect(await canvas.evaluate(element => {
    const gl = element.getContext('webgl2')
    gl.activeTexture(gl.TEXTURE0)
    return gl.getParameter(gl.SAMPLER_BINDING) === null
  })).toBe(true)

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

test('trail overlay visibility is independent from trail emission and shader input', async ({ page }) => {
  await page.goto('/')
  const shaderCanvas = page.getByLabel('Interactive pixel shader')
  await expect(shaderCanvas).toBeVisible()
  await page.getByRole('button', { name: 'Open settings' }).click()

  await page.getByRole('combobox', { name: 'Shader effect' }).selectOption({ label: 'rain' })
  await expect(shaderCanvas).toHaveAttribute('data-active-effect', 'rain')

  const trailCanvas = page.locator('canvas[data-layer="trail"]')
  const trailOverlay = page.getByRole('checkbox', { name: 'Trail overlay' })
  const trailEmission = page.getByRole('checkbox', { name: 'Trail emission' })
  const alphaPixelCount = () => trailCanvas.evaluate(element => {
    const context = element.getContext('2d')
    const pixels = context.getImageData(0, 0, element.width, element.height).data
    let count = 0
    for (let index = 3; index < pixels.length; index += 4) {
      if (pixels[index] > 0) count += 1
    }
    return count
  })

  await trailOverlay.uncheck()
  await expect(trailCanvas).toBeHidden()
  await trailEmission.uncheck()
  await page.getByRole('button', { name: 'Clear trail' }).click()
  expect(await alphaPixelCount()).toBe(0)

  await page.getByRole('button', { name: 'Play animation' }).click()
  await page.waitForTimeout(150)
  expect(await alphaPixelCount()).toBe(0)

  await trailEmission.check()
  await expect.poll(alphaPixelCount, { timeout: 5_000 }).toBeGreaterThan(0)
  await expect(trailCanvas).toBeHidden()
  await page.getByRole('button', { name: 'Pause animation' }).click()
})
