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
    }

    return <>

        <form style={{textAlign:'center'}}>
            <input type="text" name="nombre" value={inputs.nombre} onChange={changeForm}/>

            <input type="text" name="apellido" value={inputs.apellido} onChange={changeForm}/>

            <select name="curso" value={inputs.curso} onChange={changeForm}>
                <option value="MERN">MERN</option>
                <option value="JAVA">JAVA</option>
                <option value="PYTHON">PYTHON</option>
            </select>

            <button type="submit" onClick={clickButton}>Click me!</button>
        </form>
    </>;
}

export default Form;