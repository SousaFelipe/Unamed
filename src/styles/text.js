

const text = (name) => {

	const textColors = {
		'primary':	() => '#2C3854',
		'secondary':() => '#45587D',
		'tertiary': () => '#627AA7',
		'white': 	() => '#FFFFFF',
	}

	return (textColors[name] || textColors['primary'])()
}


export default text
