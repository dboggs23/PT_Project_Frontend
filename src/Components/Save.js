import React from 'react'
import SaveStyled from './styles/SaveStyled'

const Save = (props) => {
	return (
		<div
			style={{
				position: 'absolute',
				right: '10%',
				top: '100%',
			}}
		>
			<SaveStyled>
				<button onClick={(e) => props.save(e)}>
					<div>I'm ready to save!</div>
				</button>
			</SaveStyled>
		</div>
	)
}

export default Save
