export const buttonType = ['default', 'primary', 'success', 'warning', 'info', 'danger', 'text', '']
export const buttonNativeType = ['button', 'submit', 'reset']

export const buttonProps = {
	type: {
		type: String,
		values: buttonType,
		default: '',
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
}

export const buttonEmits = {
	click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
