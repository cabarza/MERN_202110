import { useNavigate } from "@reach/router";
import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Swal from "sweetalert2";

const initialState={
    name: '',
    email: '',
    phone: ''
}

const ContactForm = (props) => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState(initialState);

    const inputsUpdate = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const create = (e) => {
        e.preventDefault();
        props.create(inputs);
        navigate('/contacts/')
    }

    const cancel = () => {
        Swal.fire({
            title:'Seguro?',
            text: 'Desea perder los cambios que ha realizado?',
            icon:'question',
            confirmButtonText: 'Si, salir',
            cancelButtonText: 'No',
            showCancelButton: true
        }).then(result => {
            if(result.isConfirmed) {
                navigate('/contacts/');
            }
        })
    }

    return <>
        <Row>
            <h1>Formulario</h1>
        </Row>
        <Row>
            <Form onSubmit={create}>
                <Row>
                    <Col xs={12}>
                        <FormGroup>
                            <Label>Nombre:</Label>
                            <Input type="text" minLength={2} maxLength={50} required name="name" value={inputs.name} onChange={inputsUpdate}/>
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <FormGroup>
                            <Label>Email:</Label>
                            <Input type="email" maxLength={50} required name="email" value={inputs.email} onChange={inputsUpdate}/>
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <FormGroup>
                            <Label>Teléfono:</Label>
                            <Input type="tel" name="phone" value={inputs.phone} onChange={inputsUpdate}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="submit">Crear</Button>
                        <Button type="button" color="danger" onClick={cancel} style={{marginLeft:'20px'}}>Cancelar</Button>
                    </Col>
                </Row>
            </Form>
        </Row>

    </>
}

export default ContactForm;