import installer from './installer'

export * from './components'

export const install = installer.install
export const version = installer.version

export default { install, version }
