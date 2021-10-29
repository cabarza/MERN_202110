import React, { useState } from 'react';

const Header = (props) => {

    const [valor, setValor] = useState(0);


    const aumentarValor = (e) => {
        setValor(valor+1);
    } 

    return <>
        <h1 style={{textAlign: 'center'}}>Este es mi Home: {props.data.nombre} {props.data.apellido} {props.data.curso} {valor}</h1>

        <button type="button" onClick={aumentarValor}>Aumentar Valor</button>
    </>
}

export default Header;