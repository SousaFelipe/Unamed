import React from 'react'


export default function Button (props) {


	const type = (props.type || 'button')


	return (
		<button type={ type } style={{  }}> { props.children } </button>
	)
}
