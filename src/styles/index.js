
import bgColors from './backgrounds'
import colors from './colors'
import text from './text'


const globalStyles = {

	backgrounds: (name) => bgColors(name),

	colors: (name, level = 4) => colors(name, level),

	text: (name) => text(name)
	
}


export default globalStyles
