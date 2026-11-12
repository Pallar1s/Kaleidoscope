import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import AppState from '../src/AppState.js'
import { Matrix3x2 } from '../src/Matrix3x2.js'
import { buildFrameEmitters } from '../src/runtime/frameEmitters.js'

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

test('frame emitters use the final joint and calculate framebuffer velocities', () => {
  const result = buildFrameEmitters({
    joints: [
      { endX: 10, endY: 20, color: '#FFFF0000' },
      { endX: 30, endY: 40, color: '#FF00FF00' }
    ],
    previousJoints: [
      { endX: 8, endY: 16 },
      { endX: 24, endY: 32 }
    ],
    previousEmitter: { x: 25, y: 30, source: 'joint' },
    pointer: { x: 100, y: 200, pressed: false },
    deltaSeconds: 0.5,
    maxEmitters: 8
  })

  assert.deepEqual(result, {
    emitter: { x: 30, y: 40 },
    emitterSource: 'joint',
    emitterContinues: true,
    velocityX: 10,
    velocityY: 20,
    jointEmitters: [
      { x: 10, y: 20, velocityX: 4, velocityY: 8, color: '#FFFF0000' },
      { x: 30, y: 40, velocityX: 12, velocityY: 16, color: '#FF00FF00' }
    ]
  })
})

test('pressed pointer replaces the final uploaded joint and respects the emitter limit', () => {
  const joints = Array.from({ length: 10 }, (_, index) => ({
    endX: index * 10,
    endY: index * 20,
    color: `joint-${index}`
  }))
  const result = buildFrameEmitters({
    joints,
    previousEmitter: { x: 90, y: 190, source: 'pointer' },
    pointer: { x: 100, y: 200, pressed: true },
    deltaSeconds: 0.5,
    maxEmitters: 8
  })

  assert.deepEqual(result.emitter, { x: 100, y: 200 })
  assert.equal(result.emitterSource, 'pointer')
  assert.equal(result.emitterContinues, true)
  assert.equal(result.velocityX, 20)
  assert.equal(result.velocityY, 20)
  assert.equal(result.jointEmitters.length, 8)
  assert.deepEqual(result.jointEmitters.at(-1), {
    x: 100,
    y: 200,
    velocityX: 20,
    velocityY: 20,
    color: 'joint-7'
  })
})

test('changing emitter source resets pointer velocity', () => {
  const result = buildFrameEmitters({
    joints: [{ endX: 10, endY: 20, color: '#FFFFFFFF' }],
    previousEmitter: { x: 5, y: 10, source: 'joint' },
    pointer: { x: 100, y: 200, pressed: true },
    deltaSeconds: 0.5,
    maxEmitters: 8
  })

  assert.equal(result.emitterContinues, false)
  assert.equal(result.velocityX, 0)
  assert.equal(result.velocityY, 0)
  assert.equal(result.jointEmitters[0].velocityX, 0)
  assert.equal(result.jointEmitters[0].velocityY, 0)
})
