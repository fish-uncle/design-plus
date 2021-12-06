import button from '@demo-ui/components/button/src/button.vue'
import DefaultTheme from 'vitepress/dist/client/theme-default'

export default {
	...DefaultTheme,
	logo: '/logo.png',
	enhanceApp: ({ app }) => {
		app.component(button.name, button)
	},
}
