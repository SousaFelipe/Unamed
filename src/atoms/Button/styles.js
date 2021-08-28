
import colors from '../../styles/colors'
import text from '../../styles/text'



const styles = {
	
	button: (color = 'brand') => [
	{
			minHeight:		`38px`,
			paddingLeft:	`1.2rem`,
			paddingRight:	`1.2rem`,
			paddingTop:		`0.5rem`,
			paddingBottom:	`0.5rem`,
			borderRadius:	`0.5rem`,
			border: 		`none`,
			color: 			(color !== 'warning') ? text('white') : text('primary'),
			textShadow:		`1px 1px 3px rgba(0, 0, 0, 0.25)`,
			fontSize:		`0.75rem`,
			fontWeight:		600,
			cursor:			`pointer`,
		}
	],

	buttonHovered: (color = 'brand') => [
		{
			background: `linear-gradient(${ colors(color, 4) }, ${ colors(color, 5) })`,
		}
	],

	buttonUnhovered: (color = 'brand') => [
		{
			background: `linear-gradient(${ colors(color, 3) }, ${ colors(color, 4) })`,
		}
	],

}



export default styles
