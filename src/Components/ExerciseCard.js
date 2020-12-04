import React, { Component } from 'react'
import ExerciseCardStyled from './styles/ExerciseCardStyle'
import CountButton from './CountButton'

class ExerciseCard extends Component {
	constructor(props) {
		super(props)

		this.state = {
			//postId: null
		}
	}

	componentDidMount() {
		// Simple POST request with a JSON body using fetch
		/*
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        exercise1: true,
        exercise2: false,
        exercise3: false,
      }), 
    };
    */
		/*fetch("http://localhost:3000/app/FinishExercise", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ exercise1: true, exercise2: false, exercise3: false }))*/
	}

	render() {
		return (
			<ExerciseCardStyled exercise={this.props.exercise}>
				<div className="exercise-name">{this.props.exercise.exerciseName}</div>
				<div
					style={{
						width: '100%',
						height: '65%',
						display: 'flex',
						alignContent: 'flexEnd',
						margin: '10px 0'
					}}
				>
					{
						<img
							style={{
								flex: '0 0 auto',
							}}
							src={this.props.exercise.exerciseImage}
							alt=""
						/>
					}
				</div>
				<div className="buttonContainer">
					<CountButton 
						changeCount={this.props.changeCount}
						exercise={this.props.exercise}
						id='count'
					></CountButton>
					<button
						className="startButton"
						onClick={(e) =>
							this.props.startExercise(
								e,
								this.props.exercise.exerciseName,
								this.props.exercise.time,
								this.props.exercise.count
							)
						}
					>
						<div>Start</div>
					</button>
					<CountButton
						changeCount={this.props.changeCount}
						exercise={this.props.exercise}
						id='time'
					></CountButton>
				</div>
			</ExerciseCardStyled>
		)
	}
}

export default ExerciseCard
