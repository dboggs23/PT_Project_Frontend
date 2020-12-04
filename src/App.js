import './App.css'
import React, { Component } from 'react'
import ExerciseCardContainer from './Components/ExerciseCardContainer'
import Calendar from './Components/Calendar'
import SLR from './assets/single_leg_raise.png'
import BWS from './assets/squat_image.png'
import StraightLR from './assets/straight_leg_raise_image.jpg'
import Save from './Components/Save'
import beep from './utils/beep'
import MainContainer from './Components/styles/MainContainer'
import moment from 'moment'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			exercises: [
				{
					exerciseName: 'Body Weight Squat',
					count: 0,
					time: 0,
					exerciseImage: BWS,
					done: false,
				},
				{
					exerciseName: 'Single Leg Lift',
					count: 0,
					time: 0,
					exerciseImage: SLR,
					done: false,
				},
				{
					exerciseName: 'Bridge',
					count: 0,
					time: 0,
					exerciseImage: StraightLR,
					done: false,
				},
			],
			//get daysExercised on load. gets every day that user has entered exercises
			daysExercised: [],
			allDays: [],
		}

		this.startExercise = this.startExercise.bind(this)
		this.changeCount = this.changeCount.bind(this)
		this.save = this.save.bind(this)
		this.checkAndFormatExerciseDates = this.checkAndFormatExerciseDates.bind(this)
	}

	changeCount(e, exercise) {
		e.preventDefault()

		const thingToChange = e.target.id

		//get the correct exercise object from the state
		const clickedExercise = this.state.exercises.find((exerciseObj) => {
			return exerciseObj.exerciseName === exercise
		})

		const clickedExerciseIndex = this.state.exercises.findIndex((exerciseObj) => {
			return exerciseObj.exerciseName === exercise
		})

		if (e.target.value === '+') {
			clickedExercise[thingToChange] += 5
		}

		if (e.target.value === '-') {
			if (clickedExercise[thingToChange] >= 4) {
				clickedExercise[thingToChange] -= 5
			}
		}

		const modifiedExercises = this.state.exercises

		modifiedExercises[clickedExerciseIndex] = clickedExercise

		this.setState({
			exercises: [...modifiedExercises],
		})
	}

	startExercise(e, exercise, lengthOfInterval, numberOfRepititions) {
		e.preventDefault()
		beep(lengthOfInterval, numberOfRepititions)
		setTimeout(() => {
			//when done, set the state for the respective exercise to completed
			const clickedExercise = this.state.exercises.find((exerciseObj) => {
				return exerciseObj.exerciseName === exercise
			})

			const clickedExerciseIndex = this.state.exercises.findIndex(
				(exerciseObj) => {
					return exerciseObj.exerciseName === exercise
				}
			)

			const modifiedExercises = this.state.exercises

			clickedExercise.done = true

			modifiedExercises[clickedExerciseIndex] = clickedExercise

			this.setState({
				exercises: [...modifiedExercises],
			})
		}, lengthOfInterval * numberOfRepititions * 1000)
	}

	save(e) {
		e.preventDefault()

		const objectToSave = {
			exercise1: null,
			exercise2: null,
			exercise3: null,
		}

		const exerciseObjArr = Object.keys(objectToSave)

		this.state.exercises.forEach((exercise, i) => {
			objectToSave[exerciseObjArr[i]] = exercise.done
		})

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(objectToSave),
		}

		fetch('http://localhost:3005/app/FinishExercise', requestOptions).then(
			(response) => {
				console.log(response.status)
				this.getDaysMain()
			}
		)
	}

	days(exerciseObjDays) {
		const days = [] //gets spread into allDays

		const dateStart = moment() //current date
		const dateEnd = moment().subtract(363, 'days')

		while (dateEnd.diff(dateStart, 'days') <= 0) {
			const day = dateStart.format('YYYY-MM-DD')
			const didExercise = this.state.daysExercised.includes(day) //this should also check to see if any of the exercise
			//completed variables are set to true
			const dayObj = { date: null, exercise: null }
			dayObj.date = day
			dayObj.exercise = didExercise

			days.push(dayObj)

			dateStart.subtract(1, 'days')
		}

		days.reverse()

		this.setState({
			allDays: [...days],
		})
	}

	checkAndFormatExerciseDates(res) {
		//put the whole object in, in order to check if the exercises have been completed
		const formattedDateArray = res.map((obj) => {
			return obj.date.slice(0, 10)
		})
		this.setState({ daysExercised: formattedDateArray })
		console.log(this.state)
	}

	getDaysMain() {
		//fetch days from database, comes in as an array of objects
		//get all dates from past year, as they come in, check if those dates are in the received dates array
		//then set allDays state
		fetch('http://localhost:3005/app/getAllExercises')
			.then((res) => res.json())
			.then((res) => {
				this.checkAndFormatExerciseDates(res)
				this.days(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	componentDidMount() {
		this.getDaysMain()
	}

	handleChange = (input) => (e) => {
		this.setState({
			[input]: e.target.value,
		})
	}

	render() {
		return (
			<div className="App">
				<MainContainer>
					<ExerciseCardContainer
						exercises={this.state.exercises}
						changeInterval={this.changeIntervalLength}
						changeCount={this.changeCount}
						startExercise={this.startExercise}
					/>
					<Save save={this.save} />
					<Calendar
						getDaysMain={this.getDaysMain}
						checkAndFormatExerciseDates={this.checkAndFormatExerciseDates}
						days={this.days}
						allDays={this.state.allDays}
					/>
				</MainContainer>
			</div>
		)
	}
}

export default App
