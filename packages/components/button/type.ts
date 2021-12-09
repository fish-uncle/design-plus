export const buttonType = ['default', 'primary', 'success', 'warning', 'info', 'danger', 'text', '']

export const buttonProps = {
	type: {
		type: String,
		values: buttonType,
		default: 'default',
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	round: Boolean,
	color: String,
}

export const buttonEmits = {
	click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
