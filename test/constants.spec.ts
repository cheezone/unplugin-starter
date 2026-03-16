import { describe, expect, it } from 'vitest'
import { deriveNuxtNames } from '../src/constants'

describe('deriveNuxtNames', () => {
  it('普通包名：unplugin-starter', () => {
    const { moduleName, configKey } = deriveNuxtNames('unplugin-starter')
    expect(moduleName).toBe('nuxt-unplugin-starter')
    expect(configKey).toBe('unpluginStarter')
  })

  it('带 scope：@someone/unplugin-starter', () => {
    const { moduleName, configKey } = deriveNuxtNames('@someone/unplugin-starter')
    expect(moduleName).toBe('nuxt-unplugin-starter')
    expect(configKey).toBe('unpluginStarter')
  })

  it('其他 scoped 包名：@scope/my-plugin-name', () => {
    const { moduleName, configKey } = deriveNuxtNames('@scope/my-plugin-name')
    expect(moduleName).toBe('nuxt-my-plugin-name')
    expect(configKey).toBe('myPluginName')
  })
})
