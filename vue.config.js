const path = require('path')
const webpack = require('webpack')
const isProduction = process.env.NODE_ENV === 'production'
const needReport = false
const resolve = dir => {
	return path.join(__dirname, dir)
}
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
		proxy: {
			'^/api': {
				target: 'https://api.shenzhepei.com',
				// target: 'http://127.0.0.1:1111',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
	css: {
		extract: true,
		sourceMap: false,
		loaderOptions: {
			postcss: {
				plugins: [
					require('postcss-pxtorem')({
						// 把px单位换算成rem单位
						rootValue: 75,
						unitPrecision: 5, // 最小精度，小数点位数
						propList: ['*', '!font*'], // !不匹配属性（这里是字体相关属性不转换）
						selectorBlackList: [],
						exclude: 'node_modules',
						minPixelValue: 2, // 替换的最小像素值
					}),
				],
			},
		},
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
		config.resolve.alias.set('@demo-ui', resolve('packages'))
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
