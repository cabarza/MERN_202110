import { useState } from "react";

const initialState = {
    nombre: '',
    apellido: '',
    curso:''
}

const Home = props => {
    const { estado, setEstado } = props.data;
    const [cantidad, setCantidad] = useState(0);


    const changeForm = (e) => {
        const {name, value} = e.target;
        setEstado({
            ...estado,
            [name]: value 
        });
    }
    

    const clickButton = (e, variable) => {

        e.preventDefault();
        console.log(variable);
        setCantidad('Hola');
        alert(cantidad);
    }

    return <>

        <form style={{textAlign:'center'}}>
            <input type="text" name="nombre" value={estado.nombre} onChange={changeForm}/>

            <input type="text" name="apellido" value={estado.apellido} onChange={changeForm}/>

            <select name="curso" value={estado.curso} onChange={changeForm}>
                <option value="MERN">MERN</option>
                <option value="JAVA">JAVA</option>
                <option value="PYTHON">PYTHON</option>
            </select>

            <button type="submit" onClick={e =>clickButton(e, Math.random())}>Click me!</button>
        </form>
    </>;
}

export default Home;