import { useState } from "react"
import { Container } from "reactstrap";
import CarForm from "./form";
import List from "./list";
import View from "./view";

const initialState = {
    marca: '',
    modelo: '',
    color: ''
}

const Admin = (props) => {

    const [autos, setAutos] = useState([]);
    const [inputs, setInputs] = useState(initialState);

    return <Container>
            <CarForm inputs={inputs} setInputs={setInputs} initialState={initialState} autos={autos} setAutos={setAutos}/>
            <View inputs={inputs}/>
            <List autos={autos}/>
        </Container>
}

export default Admin;