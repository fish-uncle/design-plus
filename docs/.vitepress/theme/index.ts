// import button from '@demo-ui/components/button'
import DefaultTheme from 'vitepress/dist/client/theme-default'

export default {
	...DefaultTheme,
	logo: '/logo.png',
	enhanceApp: ({ app }) => {
		// app.use(button)
	},
}
