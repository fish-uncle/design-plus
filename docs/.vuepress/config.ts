import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
	lang: 'zh-CN',
	title: 'uncle-ui',
	description: 'uncle-ui',
	nav: [{ text: '指南', link: '/guide/' }],
	// head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	themeConfig: {
		logo: 'https://vuejs.org/images/logo.png',
		sidebar:{
			'/guide/': [{
				title: 'The Feathers guide',
				children: [
					'guide/installation.md',
				]
			}]
		}
	},
})
