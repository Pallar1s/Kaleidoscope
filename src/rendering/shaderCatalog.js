const shaderModules = import.meta.glob('../shaders/*.js', { eager: true })

function discoverShaders() {
  const shaders = []

  for (const path in shaderModules) {
    const module = shaderModules[path]
    const fileName = path.split('/').pop().replace('.js', '')
    const keys = Object.keys(module).filter(key => key.endsWith('FragmentShader'))

    if (keys.length > 1) {
      const common = module.common || ''
      const channels = module.channels || {}
      const samplers = module.samplers || {}
      const passSizes = module.passSizes || {}
      const passes = {}

      for (const key of keys) {
        const passName = key.replace('FragmentShader', '').toLowerCase()
        let channelConfig = channels[passName] || {}

        if (Object.keys(channelConfig).length === 0) {
          for (const channelName of Object.keys(channels)) {
            if (channelName.toLowerCase() === passName) {
              channelConfig = channels[channelName]
              break
            }
          }
        }

        passes[passName] = {
          fragmentShader: common + module[key],
          channels: channelConfig,
          samplers: samplers[passName] || {},
          size: passSizes[passName] || null
        }
      }

      shaders.push({ name: fileName, type: 'multi', passes })
    } else if (keys.length === 1) {
      shaders.push({
        name: fileName,
        type: 'single',
        fragmentShader: module[keys[0]],
        channelSources: module.channelSources || {},
        trailMipmaps: module.trailMipmaps === true
      })
    }
  }

  return shaders.sort((left, right) => left.name.localeCompare(right.name))
}

export const availableShaders = discoverShaders()

const shadersByName = new Map(availableShaders.map(shader => [shader.name, shader]))

export function shaderUsesChannelSource(effect, source) {
  const shader = shadersByName.get(effect)
  if (!shader) return false

  if (shader.type === 'single') {
    return Object.values(shader.channelSources || {}).includes(source)
  }

  return Object.values(shader.passes).some(pass => (
    Object.values(pass.channels || {}).includes(source)
  ))
}
