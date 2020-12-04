import styled from 'styled-components'

const ExerciseCardStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 200px;
	height: 200px;
	border-radius: 10px;
	background-color: ${(props) => (props.exercise.done ? '#db4e4b' : 'grey')};
	margin: 50px;
	padding: 5px;
	position: relative;
	font-family: 'Open Sans';
	font-size: 1rem;
	color: #fff;

	.exercise-name {
		margin: 0 auto;
		padding: 0;
	}

	img {
		width: 100%;
	}

	.buttonContainer {
		display: flex;
		margin: 0 auto;
		height: 15%;
		max-width: 90%;
		position: absolute;
		left: 6px;
		bottom: 6px;
	}

	.startButton {
		display: inline-block;
		border: none;
		border-radius: 5px;
		padding: 0.2rem 0.5rem;
		min-width: 30%;
		margin: 0 10px;
		text-decoration: none;
		background: #279f4c;
		color: #ffffff;
		font-family: sans-serif;
		font-size: 0.9rem;
		cursor: pointer;
		text-align: center;
		transition: background 250ms ease-in-out, transform 150ms ease;
		-webkit-appearance: none;
		-moz-appearance: none;
	}

	.startButton:hover,
	.startButton:focus {
		background: #4bdb78;
	}

	.startButton:focus {
		outline: 1px solid #fff;
		outline-offset: -4px;
	}

	.startButton:active {
		transform: scale(0.99);
	}
`

export default ExerciseCardStyled
