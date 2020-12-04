import styled from 'styled-components'
//make 52 x 7 grid of boxes
const CalendarStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(52, 1fr);
	grid-template-rows: repeat(7, 1fr);
	//grid-gap: 1em;
	grid-auto-rows: auto;
	max-width: 100px;
	grid-auto-flow: column;
	
`

export default CalendarStyled
