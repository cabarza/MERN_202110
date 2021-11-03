import { useState } from "react"
import { Col, Container, Row } from "reactstrap";
import MyContext from "../../context/my-context";
import CarForm from "./form";
import List from "./list";
import View from "./view";

const initialState = {
    marca: '',
    modelo: '',
    color: '',
    estado: '',
    airbag: false,
    radio: false,
    sunroof: false,
    fechaCompra: null
}

const Admin = (props) => {

    const [autos, setAutos] = useState([]);
    const [inputs, setInputs] = useState(initialState);

    return <MyContext.Provider value={{inputs, setInputs}}> 
        <Container>
            <Row>
                <Col xs={6}>
                    <CarForm initialState={initialState} autos={autos} setAutos={setAutos}/>
                </Col>
                <Col xs={6}>
                    <View />
                </Col>
                <Col xs={12}>
                    { autos && autos.length > 0 && <List autos={autos}/>}
                </Col>
            </Row>
        </Container>
    </MyContext.Provider>
}

export default Admin;