import React, { useState } from 'react'

import styles from './styles'


export default function Button (props) {


	const type = (props.type || 'button')
	const defaultStyle = styles.button(props.color)[0]


	const [hover, setHover] = useState(false)


	return (
		<button
			type={ type }
			onMouseEnter={ () => setHover(true) }
			onMouseOut={ () => setHover(false) }
			style={{
				...defaultStyle,
				...(hover ? (
					styles.buttonHovered(props.color)[0]
				) : (
					styles.buttonUnhovered(props.color)[0]
				))
			}}>
				
			{ props.children }

		</button>
	)
}
