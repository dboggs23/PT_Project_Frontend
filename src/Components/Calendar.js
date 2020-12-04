import React from 'react'
import CalendarStyled from './styles/CalendarStyles'
import CalendarDate from './CalendarDate'

//2020-10-21T21:39:11.539+00:00
//{(dates.map = (date) => {})}

class Calendar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	componentDidMount() {
		this.props.getDaysMain()
	}

	render() {
		return (
			<div
				style={{
					position: 'absolute',
					left: '10%',
					top: '120%',
				}}
			>
				<CalendarStyled>
					{this.props.allDays.map((day) => {
						return <CalendarDate day={day} key={day.date}></CalendarDate>
					})}
				</CalendarStyled>
			</div>
		)
	}
}

export default Calendar
