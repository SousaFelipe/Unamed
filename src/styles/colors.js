


const allowedColors = [
	'brand', 
	'info', 
	'success', 
	'warning', 
	'danger'
]


const colors = (name, level) => {

	const colors = {
		'brand': 	() => ['F0F8FF', 'C7E7FE', '88CBFF', '02AAFF', '0094FE'],
		'info': 	() => ['F8F5FF', 'E3D4FF', 'C4A6FF', '9764FF', '884DFF'],
		'success': 	() => ['EBFDF7', 'C7FAE7', '88F1CB', '20E3A2', '00E096'],
		'warning': 	() => ['FFF9F2', 'FFEDD9', 'FFDAAF', 'FEBF73', 'FFB55E'],
		'danger': 	() => ['FF3D71', 'FF3D71', 'FF3D71', 'FF3D71', 'FF3D71']
	}

	let color = (allowedColors.indexOf(name) > -1)
		? (colors[name] || colors['brand'])()
		: colors['brand']

	return `#${
		(level > 0 && level < 6) ? color[level - 1] : color[3]
	}`
}


export default colors
