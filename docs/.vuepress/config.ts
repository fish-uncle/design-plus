import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

const path = require('path')

export default defineUserConfig<DefaultThemeOptions>({
	lang: 'zh-CN',
	title: 'demo-ui',
	description: 'demo-ui',
	alias: {
		'@demo-ui': path.resolve(__dirname, '../../packages'),
	},
	// head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	themeConfig: {
		logo: 'https://vuejs.org/images/logo.png',
		navbar: [
			{ text: '指南', link: '/guide/design.html' },
			{ text: '组件', link: '/component/button.html' },
			{ text: 'github', link: 'https://github.com/fish-uncle/demo-ui' },
		],
		sidebar: {
			'/guide/': [
				{
					text: '基础',
					link: '/guide/design.html',
				},
				{
					text: '导航',
					link: '/guide/nav.html',
				},
				{
					text: '安装',
					link: '/guide/installation.html',
				},
				{
					text: '快速开始',
					link: '/guide/quickstart.html',
				},
			],
			'/component/': [
				{
					text: 'Basic 基础组件',
					children: [
						{
							text: 'Button',
							link: '/component/button.html',
						},
					],
				},
			],
		},
	},
})
