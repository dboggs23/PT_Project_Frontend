import React, { Component } from 'react'
import ExerciseCardContainerStyled from './styles/ExerciseCardContainerStyled'
import ExerciseCard from './ExerciseCard'


class ExerciseCardContainer extends Component {

	render() {
		return (
			<ExerciseCardContainerStyled>
				{this.props.exercises.map((exercise) => (
					<ExerciseCard
						exercise={exercise}
						changeInterval={this.props.changeInterval}
						changeCount={this.props.changeCount}
						startExercise={this.props.startExercise}
					/>
				))}
			</ExerciseCardContainerStyled> 
		)
	}
}

export default ExerciseCardContainer
