import { mdPlugin } from './config/plugins'

module.exports = {
	lang: 'zh-CN',
	title: 'demo-ui',
	description: 'demo-ui',
	base: '/',
	head: [['link', { rel: 'icon', href: '/logo.ico' }]],
	plugins: [],
	markdown: {
		config: (md) => mdPlugin(md),
	},
	themeConfig: {
		repo: 'fish-uncle/demo-ui',
		logo: '/logo.png',
		nav: [
			{ text: '指南', link: '/guide/design.html' },
			{ text: '组件', link: '/component/button.html' },
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
}
