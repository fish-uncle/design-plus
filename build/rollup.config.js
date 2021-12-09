import vuePlugin from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'
import nodeResolvePlugin from '@rollup/plugin-node-resolve'
import glob from 'glob'
import esbuild from 'rollup-plugin-esbuild'
import autoprefixer from 'autoprefixer'
import alias from '@rollup/plugin-alias'
import replace from '@rollup/plugin-replace'
import pkg from '../package.json'

const customResolver = nodeResolvePlugin({
	extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss', '.ts'],
})
const path = require('path')

const inputOptions = {
	input: 'packages/index.ts',
	plugins: [
		replace({
			preventAssignment:true,
			'process.env.version': JSON.stringify(pkg.version),
		}),
		alias({
			entries: {
				'@demo-ui': path.resolve(__dirname, '../packages'),
			},
			customResolver,
		}),
		nodeResolvePlugin(),
		vuePlugin({
			preprocessStyles: true,
			target: 'browser',
		}),
		esbuild({
			target: 'es6',
			minify: true,
		}),
		postcss({
			extract: true,
			plugins: [autoprefixer()],
		}),
		commonjs(),
		copy({
			targets: [
				{ src: path.resolve(__dirname,'../LICENSE.md'), dest: 'dist' },
				{ src: path.resolve(__dirname,'../package.json'), dest: 'dist' },
			]
		})
	],
	external(id) {
		return /^vue/.test(id)
	},
}

const outputOptions = {
	format: 'es',
	file: 'dist/es/index.js',
}

const getInputs = () => {
	return glob.sync('packages/components/**/index.ts')
}

const generateModuleOption = format => {
	return getInputs().map(input => {
		const compName = input.split('/').slice(-2, -1)
		const prefixCompName = `d-${compName}`
		return {
			...inputOptions,
			input,
			output: {
				format,
				file: `dist/${format}/${compName}/index.js`,
				name: prefixCompName,
				globals: {
					vue: 'Vue',
				},
			},
		}
	})
}
export default [
	{
		...inputOptions,
		output: outputOptions,
	},
	...generateModuleOption('es'),
	{
		...inputOptions,
		output: {
			format: 'umd',
			file: 'dist/umd/index.js',
			name: 'demoUI',
			globals: {
				vue: 'Vue',
			},
		},
	},
	...generateModuleOption('umd'),
]
