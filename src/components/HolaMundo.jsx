import React from 'react';

const HolaMundo = () => {
    const Hello = 'Hola mundo'
    const isTrue = true
    return (
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso esencial de React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
            {isTrue ? <h4>Esto es verdadero</h4> : <h5>Soy falso</h5>}
        </div>
    )
}

export default HolaMundo;