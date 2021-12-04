import { buildProps, definePropType } from '@demo-ui/utils/props'
import type { Component } from 'vue'

export const buttonType = ['default', 'primary', 'success', 'warning', 'info', 'danger', 'text', '']
export const buttonNativeType = ['button', 'submit', 'reset']

export const buttonProps = buildProps({
	type: {
		type: String,
		values: buttonType,
		default: '',
	},
	icon: {
		type: definePropType<string | Component>([String, Object]),
		default: '',
	},
	nativeType: {
		type: String,
		values: buttonNativeType,
		default: 'button',
	},
	loading: Boolean,
	plain: Boolean,
	autofocus: Boolean,
	round: Boolean,
	circle: Boolean,
	color: String,
	autoInsertSpace: {
		type: Boolean,
	},
})

export const buttonEmits = {
	click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
