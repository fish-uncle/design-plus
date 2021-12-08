import { defineConfig } from 'vite'
import sassDts from 'vite-plugin-sass-dts'
import Inspect from 'vite-plugin-inspect'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
	plugins: [sassDts(), Inspect()],
	resolve: {
		alias: {
			'@demo-ui': path.resolve(__dirname, '../packages'),
		},
	},
	optimizeDeps: {
		include: ['vue', 'markdown-it', '@vueuse/core'],
	},
})
