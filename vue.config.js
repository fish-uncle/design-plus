const path = require('path')
const webpack = require('webpack')
const isProduction = process.env.NODE_ENV === 'production'
const needReport = false
const pkg = require('./package.json')

module.exports = {
	productionSourceMap: false,
	lintOnSave: false,
	assetsDir: './',
	devServer: {
		port: 3000,
		hot: true,
		open: true,
		historyApiFallback: true,
		disableHostCheck: true,
	},
	css: {
		extract: true,
		sourceMap: false,
	},
	configureWebpack: config => {
		config.output.libraryExport = 'default'
		config.resolve.extensions = ['.js', '.vue', '.json', '.ts', '.tsx']
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.version': JSON.stringify(pkg.version),
			}),
		)
	},
	chainWebpack: config => {
		config.resolve.alias.set('@demo-ui', path.resolve(__dirname, 'packages'))
		if (isProduction) {
			if (needReport) {
				config
					.plugin('webpack-bundle-analyzer')
					.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
					.end()
			}
			config.plugins.delete('prefetch')
		} else {
			config.resolve.symlinks(true)
		}
	},
}
