import path from 'path'
import chalk from 'chalk'
import { src, dest, series, parallel } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'

const distFolder = path.resolve(__dirname, '../dist/style')
const distBundle = path.resolve(__dirname, '../packages/theme-chalk')

function buildThemeChalk() {
	const sass = gulpSass(dartSass)
	return src(path.resolve(__dirname, '../packages/theme-chalk/**.scss'))
		.pipe(sass.sync())
		.pipe(autoprefixer({ cascade: false }))
		.pipe(
			cleanCSS({}, (details) => {
				console.log(
					`${chalk.cyan(details.name)}: ${chalk.yellow(
						details.stats.originalSize / 1000
					)} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
				)
			})
		)
		.pipe(dest(distFolder))
}

export function copyThemeChalkSource() {
	return src(path.resolve(__dirname, '../packages/theme-chalk/**')).pipe(
		dest(path.resolve(distBundle, '../../dist/style'))
	)
}

export const build = parallel(
	copyThemeChalkSource,
	series(buildThemeChalk)
)

export default build
