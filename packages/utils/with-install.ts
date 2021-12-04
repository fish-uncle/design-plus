import type { SFCWithInstall } from './types'

// vue install
export const withInstall = <T>(main: T) => {
	;(main as SFCWithInstall<T>)['install'] = (app): void => {
		// @ts-ignore
		app.component(main.name, main)
	}
	return main
}
