import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Swal from "sweetalert2";

const initialState = {
    marca: '',
    color: '000',
    anio: 1950
}

const CarForm = (props) => {

    const {save: saveFn} = props;

    const [inputs, setInputs] = useState(initialState);

    const { id } = useParams();

    const navigate = useNavigate();

    const maxYear = new Date().getFullYear() + 1; 

    const formUpdate = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const save = (e) => {
        e.preventDefault();
        saveFn(inputs);
        navigate('/cars');
    }

    const cancel = (e) => {
        e.stopPropagation();
        navigate('/cars');
    }

    useEffect(() => {
        if(id) {
            axios.get(`/api/cars/${id}`).then(resp => {
                if(!resp.data.error) {
                    setInputs(resp.data.data);
                } else {
                    Swal.fire('Error', resp.data.message, 'error');
                }
            }).catch(error => console.log('error', error));
        }
    }, [id])

    return (
        <Form onSubmit={save}>
            <FormGroup>
                <Label>Marca:</Label>
                <Input type="text" name="marca" value={inputs.marca} onChange={formUpdate} required minLength={2} maxLength={50}/>
            </FormGroup>

            <FormGroup>
                <Label>Color:</Label>
                <Input type="color" name="color" value={inputs.color} onChange={formUpdate}/>
            </FormGroup>

            <FormGroup>
                <Label>Año:</Label>
                <Input type="number" name="anio" value={inputs.anio} onChange={formUpdate} min={1950} max={maxYear}/>
            </FormGroup>

            <Row>
                <Col>
                    <Button type="submit">Guardar</Button>
                </Col>
                <Col>
                    <Button type="button" onClick={cancel}>Cancelar</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default CarForm;