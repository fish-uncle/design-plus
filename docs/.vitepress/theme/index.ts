// @ts-ignore
import demoUI from '@demo-ui'
import DefaultTheme from 'vitepress/dist/client/theme-default'
import vpDemo from '../components/vp-demo.vue'

import './doc.scss'

export default {
	...DefaultTheme,
	logo: '/logo.png',
	enhanceApp: ({ app }) => {
		app.use(demoUI)
		app.component('vp-demo', vpDemo)
	},
}
