import styled from 'styled-components'

const SaveStyled = styled.div`
	

	button {
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

	button:hover,
	button:focus {
		background: #4bdb78;
	}

	button:focus {
		outline: 1px solid #fff;
		outline-offset: -4px;
	}

	button:active {
		transform: scale(0.99);
    }
    
    button div{
        font-size: 1rem;
        margin: .5rem;
    }
`

export default SaveStyled
