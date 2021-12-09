import DButton from './components/button'
import DLink from './components/link'
import { App } from 'vue'

export { default as DButton } from './components/button'
export { default as DLink } from './components/link'

const component = { DButton, DLink }
export default {
	version() {
		return process.env.version
	},
	install(app: App) {
		Object.values(component).forEach(item => {
			// @ts-ignore
			app.use(item)
		})
	},
}
