import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import AppState from '../src/AppState.js'
import { Matrix3x2 } from '../src/Matrix3x2.js'

test('joint transform rotates locally and remains anchored at the screen center', () => {
  const center = Matrix3x2.createTranslation(400, 300)
  const translation = Matrix3x2.createTranslation(0, 100)

  const down = translation.multiply(Matrix3x2.createRotation(0)).multiply(center).getTranslation()
  assert.deepEqual(down, { x: 400, y: 400 })

  const left = translation.multiply(Matrix3x2.createRotation(Math.PI / 2)).multiply(center).getTranslation()
  assert.ok(Math.abs(left.x - 300) < 1e-9)
  assert.ok(Math.abs(left.y - 300) < 1e-9)
})

test('all presets have a usable name and valid joints', async () => {
  const source = await readFile(new URL('../presets/presets.json', import.meta.url), 'utf8')
  const presets = JSON.parse(source)
  assert.ok(presets.length > 0)

  for (const preset of presets) {
    assert.equal(typeof preset.Name, 'string')
    assert.ok(preset.Name.length > 0)
    assert.ok(Array.isArray(preset.Joints) && preset.Joints.length > 0)
    for (const joint of preset.Joints) {
      assert.ok(Number.isFinite(joint.Size) && joint.Size > 0)
      assert.ok(Number.isFinite(joint.Speed))
      assert.equal(typeof joint.Enabled, 'boolean')
      assert.match(joint.JointColor, /^#[0-9a-f]{8}$/i)
    }
  }
})

test('joint simulation uses seconds and framebuffer coordinates', () => {
  const state = new AppState()
  state.loadPreset(0)

  const initial = state.calculateJoints(800, 600)
  assert.deepEqual(
    { x: initial[0].startX, y: initial[0].startY },
    { x: 400, y: 300 }
  )
  assert.ok(Math.abs(initial.at(-1).endX - 400) < 1e-9)
  assert.ok(Math.abs(initial.at(-1).endY - 600) < 1e-9)

  state.updateJoints(0.01)
  assert.equal(state.joints[0].rotation, 1)
})
