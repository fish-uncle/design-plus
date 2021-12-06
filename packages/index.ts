import installer from './installer'

export * from '@demo-ui/components'

export const install = installer.install
export const version = installer.version

export default { install, version }
