import { defineConfig } from 'vite'
import sassDts from 'vite-plugin-sass-dts'

const path = require('path')

export default defineConfig({
	plugins: [sassDts()],
	resolve: {
		alias: {
			'@demo-ui': path.resolve(__dirname, '../packages'),
		},
	},
})
