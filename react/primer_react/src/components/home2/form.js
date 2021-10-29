import { useState } from "react";

const initialState = {
    nombre: '',
    apellido: '',
    curso:''
}

const Form = props => {
    const [ inputs, setInputs ] = useState(initialState);


    const changeForm = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value 
        });
    }
    

    const clickButton = (e) => {
        e.preventDefault();
        props.agregar(inputs);
        setInputs(initialState);
    }

    return <>

        <form onSubmit={clickButton} style={{textAlign:'center'}}>
            <input type="text" name="nombre" value={inputs.nombre} onChange={changeForm} required minLength={2}/>

            <input type="text" name="apellido" value={inputs.apellido} onChange={changeForm} required minLength={3}/>

            <select name="curso" value={inputs.curso} onChange={changeForm} required>
                <option value="">Seleccione</option>
                <option value="MERN">MERN</option>
                <option value="JAVA">JAVA</option>
                <option value="PYTHON">PYTHON</option>
            </select>

            <button type="submit">Click me!</button>
        </form>
    </>;
}

export default Form;