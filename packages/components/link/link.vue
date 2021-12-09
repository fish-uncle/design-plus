<template lang="pug">
a(:class="className" :href="disabled || !href ? undefined : href" :style="style" @click="handleClick")
	span.d-link-inner
		slot
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { linkEmits, linkProps } from './type'
import { useCssVar } from '@vueuse/core'
import { lighten } from '@demo-ui/utils/color'

export default defineComponent({
	name: 'DLink',
	props: linkProps,
	emits: linkEmits,
	setup(props, { emit }) {
		const linkType = props.type || 'default'
		const className = computed(() => {
			return [
				'd-link',
				linkType ? 'd-link--' + linkType : '',
				{
					'is-disabled': props.disabled,
					'is-underline': !props.disabled && props.underline,
				},
			]
		})

		const style = computed(() => {
			let styles = {}
			const typeColor = useCssVar(`--d-color-${props.type}`)
			const linkColor = typeColor.value
			if (linkColor) {
				const lightenBgColor = lighten(linkColor)
				styles = {
					'--d-link-hover-text-color': lightenBgColor,
				}
				if (props.disabled) {
					const disabledLinkColor = lighten(linkColor, 0.5)
					styles['--d-link-disabled-text-color'] = disabledLinkColor
				}
			}
			return styles
		})

		function handleClick(event: MouseEvent) {
			if (!props.disabled) emit('click', event)
		}

		return {
			className,
			handleClick,
			style,
		}
	},
})
</script>
<style lang="scss">
@import '../../theme-chalk/link.scss';
</style>
