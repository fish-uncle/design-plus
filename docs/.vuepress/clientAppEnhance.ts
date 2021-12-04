import { defineClientAppEnhance } from '@vuepress/client'
import UButton from '@demo-ui/components/button'

export default defineClientAppEnhance(({ app }) => {
	app.use(UButton)
})
