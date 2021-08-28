

import colors from '../../styles/colors'


const styles = {

	button: (color = 'primary') => [
		{
			background: `linear-gradient(${ colors(color, 5) }, ${ colors(color, 4) })`
		}
	]
}



export default styles
