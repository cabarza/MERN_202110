import { useContext } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import MyContext from "../../context/my-context";
const View = (props) => {
    const context = useContext(MyContext);

    return <ul>
        {context.inputs.marca && <li>Marca: {context.inputs.marca} </li> }
        {context.inputs.modelo && <li>Modelo: {context.inputs.modelo} </li> }
        {context.inputs.color && <li>Color: {context.inputs.color} </li> }
        {context.inputs.estado && <li>Estado: {context.inputs.estado} </li> }
        {context.inputs.airbag && <li>Airbag: <AiOutlineCheck/> </li> }
        {context.inputs.radio && <li>Radio:  <AiOutlineCheck/> </li> }
        {context.inputs.sunroof && <li>Sunroof:  <AiOutlineCheck/> </li> }
    </ul>
}

export default View;