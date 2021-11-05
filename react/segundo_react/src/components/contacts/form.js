import { useNavigate } from "@reach/router";
import { useEffect, useState } from "react";
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

    const save = (e) => {
        e.preventDefault();
        if(!props.id) {
            props.create(inputs);
        } else {
            props.update(inputs, props.id);
        }
        navigate('/contacts/');
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

    useEffect(() => {
        if(props.id) {
            setInputs(props.contacts[props.id]);
        }
    }, [])

    return <>
        <Row>
            <h1>Formulario</h1>
        </Row>
        <Row>
            <Form onSubmit={save}>
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
                        { !props.id && <Button type="submit">Crear</Button> }
                        { props.id && <Button type="submit">Actualizar</Button> }
                        <Button type="button" color="danger" onClick={cancel} style={{marginLeft:'20px'}}>Cancelar</Button>
                    </Col>
                </Row>
            </Form>
        </Row>

    </>
}

export default ContactForm;