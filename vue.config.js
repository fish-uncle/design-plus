const path = require('path')

module.exports = {
	pages: {
		index: {
			entry: './play/main.ts',
		},
	},
	assetsDir: './',
	chainWebpack: config => {
		config.resolve.alias.set('@design-plus', path.resolve(__dirname, 'packages'))
	},
}
