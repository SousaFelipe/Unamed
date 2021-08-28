

const bgColors = (name) => {

	const bgColors = {
		'primary':		() => '#F7F9FD',
		'secondary':	() => '#E2E8F4',
		'tertiary': 	() => '#B2BFD7',
		'quaternary': 	() => '#889BBF',
		'light':		() => '#F0F3FA',
		'white':		() => '#FFFFFF',
	}

	return (bgColors[name] || bgColors['primary'])()
}


export default bgColors
