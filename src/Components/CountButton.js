import React from 'react'
import ButtonContainer from './styles/ButtonContainer'

const CountButton = (props) => {
	return (
		<ButtonContainer>
			<button
				className="plusMinusButton"
				id={props.id}
				value="-"
				onClick={(e) => props.changeCount(e, props.exercise.exerciseName)}
			>
				-
			</button>
			<div className='count'>{props.id === 'count' ? props.exercise.count : props.exercise.time}</div>
			<button
				className="plusMinusButton"
				id={props.id}
				value="+"
				onClick={(e) => props.changeCount(e, props.exercise.exerciseName)}
			>
				+
			</button>
		</ButtonContainer>
	)
}

export default CountButton
