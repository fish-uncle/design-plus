export const buttonType = ['default', 'primary', 'success', 'warning', 'info', 'danger', 'text', '']

export const buttonProps = {
	type: {
		type: String,
		values: buttonType,
		default: 'default',
	},
	loading: Boolean,
	disabled: Boolean,
	autofocus: Boolean,
	round: Boolean,
	color: String,
	autoInsertSpace: {
		type: Boolean,
	},
}

export const buttonEmits = {
	click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
