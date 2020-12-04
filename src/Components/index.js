import React from "react";
import Calendar from "./Calendar";
import ExerciseCardContainer from "./ExerciseCardContainer";

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	

	render() {
		return (
			<div>
				<ExerciseCardContainer/>
				<Calendar></Calendar>
			</div>
		)
	}
}

export default App;
