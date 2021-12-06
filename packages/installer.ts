import Components from './component'
import type { App } from 'vue'

export default {
	version() {
		return process.env.version
	},
	install(app: App) {
		Components.forEach(component => {
			// @ts-ignore
			app.use(component)
		})
	},
}
