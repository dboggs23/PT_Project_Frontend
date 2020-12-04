import styled from 'styled-components'

const ButtonContainer = styled.div`
	background-color: #4bdb78;
	border-radius: 5px;
	display: flex;
	width: 65px;
	align-items: center;
	background: #279f4c;
	color: #ffffff;

	.plusMinusButton {
		display: inline-block;
		border: none;
		border-radius: 5px;
		margin: 3px;
		text-decoration: none;
		background: none;
		color: #ffffff;
		//font-family: sans-serif;
		font-size: 1rem;
		cursor: pointer;
		text-align: center;
		transition: background 250ms ease-in-out, transform 150ms ease;
	}

	.count {
        margin: 0 auto;
        font-size: .9rem;
	}

	.plusMinusButton:hover,
	.plusMinusButton:focus {
		background: #4bdb78;
	}

	.plusMinusButton:focus {
		outline: 1px solid #fff;
		outline-offset: -4px;
	}

	.plusMinusButton:active {
		transform: scale(0.99);
	}
`

export default ButtonContainer
