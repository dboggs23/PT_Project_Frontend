import styled from 'styled-components'


//when an exercise is done turn the card background color a different color 
const CalendarDateStyled = styled.div`
	width: 10px;
	height: 10px;
	background-color: ${(props) => (props.didExercise ? 'lime' : 'grey')};
	border-radius: 30%;
	margin: 1px;
`

 export default CalendarDateStyled
