<template lang="pug">
button(:class="className" @click="handleClick" :autofocus="autofocus")
	slot
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { buttonEmits, buttonProps } from './button'

export default defineComponent({
	name: 'DButton',
	props: buttonProps,
	emits: buttonEmits,
	setup(props, { emit }) {
		const handleClick = (evt: MouseEvent) => {
			emit('click', evt)
		}

		const className = computed(() => {
			const buttonType = props.type || 'default'
			return ['d-button', buttonType ? 'd-button--' + buttonType : '']
		})

		return {
			handleClick,
			className,
		}
	},
})
</script>
<style lang="scss" scoped>
@import '@demo-ui/theme-chalk/button.scss';
</style>
