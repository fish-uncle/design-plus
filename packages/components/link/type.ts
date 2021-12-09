export const linkType = ['default', 'primary', 'success', 'warning', 'info', 'danger', 'text', '']

export const linkProps = {
	type: {
		type: String,
		values: linkType,
		default: 'default',
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	underline: {
		type: Boolean,
		default: true,
	},
	href: {
		type: String,
		default: '',
	},
}

export const linkEmits = {
	click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
