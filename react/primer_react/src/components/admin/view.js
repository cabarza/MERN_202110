const View = (props) => {
    return <ul>
        <li>Marca: {props.inputs.marca} </li>
        <li>Modelo: {props.inputs.modelo} </li>
        <li>Color: {props.inputs.color} </li>
    </ul>
}

export default View;