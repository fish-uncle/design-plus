<template lang="pug">
button(:class="className" @click="handleClick" :type="nativeType"  :autofocus="autofocus")
	slot
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { buttonEmits, buttonProps } from './button'
import '@demo-ui/components/button/style/button'

export default defineComponent({
	name: 'UButton',
	props: buttonProps,
	emits: buttonEmits,
	setup(props, { emit }) {
		const handleClick = (evt: MouseEvent) => {
			emit('click', evt)
		}

		const className = computed(() => {
			const buttonType = props.type || 'default'
			return ['u-button', buttonType ? 'u-button--' + buttonType : '']
		})

		return {
			handleClick,
			className,
		}
	},
})
</script>
