// esto es una prueba


export default function Card(props) {
	return (
		<div>
			<button onClick={() => props.onClose(props.id)}>X</button>
        </div>
    )};