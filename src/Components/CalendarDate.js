import React from 'react'
import CalendarDateStyled from './styles/CalenderDateStyles'

const CalendarDate = (props) => {
	return (
		<CalendarDateStyled didExercise={props.day.exercise}>
            {/*console.log(props.day.date)*/}
		</CalendarDateStyled>
	)
}

export default CalendarDate
