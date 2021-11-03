import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import DatePicker from "react-datepicker";
import { useContext, useEffect } from "react";
import MyContext from "../../context/my-context";

const CarForm = ({initialState, autos, setAutos}) => {
    
    const context = useContext(MyContext);
    const {inputs, setInputs} = context;

    const actualizarFormulario = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const actualizarFormularioChecked = (e) => {
        const {id, checked} = e.target;
        setInputs({
            ...inputs,
            [id]: checked
        });
        if(id === 'nuevo') {
            setInputs({
                ...inputs,
                usado: false
            }); 
        } else if(id === 'usado') {
            setInputs({
                ...inputs,
                nuevo: false
            });
        }
    }


    const agregarElemento = (e) => {
        e.preventDefault();
        setAutos([
            ...autos,
            inputs
        ]);
        setInputs(initialState);
    }


    const seleccionarColor = (e, color) => {
        setInputs({
            ...inputs,
            color: color
        })
    }
    

    useEffect(() => {
        setInputs({
            ...inputs,
            fechaCompra: new Date()
        })   
    }, [inputs.color]);
    
    return <Form onSubmit={agregarElemento}>
            <Row>
                <Col xs={12}>
                    <FormGroup>
                        <Label>Marca</Label>
                        <Input type="select" id="marca" name="marca" value={inputs.marca} onChange={actualizarFormulario} required>
                            <option value="">Seleccione</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Mercedez">Mercedez</option>
                            <option value="BMW">BMW</option>
                            <option value="KIA">KIA</option>
                            <option value="FIAT">FIAT</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Label>Modelo</Label>
                        <Input type="text" id="modelo" name="modelo" required minLength="2"  maxLength="30" value={inputs.modelo} onChange={actualizarFormulario}/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Label htmlFor="color">Color</Label>
                        <Input type="color" id="color" name="color" required value={inputs.color} onChange={actualizarFormulario}/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Label htmlFor="color">Nuevo</Label>
                        <Input type="radio" id="estado" name="estado" value="nuevo" checked={inputs.nuevo} onChange={actualizarFormulario}/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Label htmlFor="color">Usado</Label>
                        <Input type="radio" id="estado" name="estado" value="usado" checked={inputs.usado} onChange={actualizarFormulario}/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Label htmlFor="color">Airbag</Label>
                        <Input type="checkbox" id="airbag" name="airbag" checked={inputs.airbag} onChange={actualizarFormularioChecked}/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Label htmlFor="color">Radio</Label>
                        <Input type="checkbox" id="radio" name="radio" checked={inputs.radio} onChange={actualizarFormularioChecked}/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Label htmlFor="color">Sunroof</Label>
                        <Input type="checkbox" id="sunroof" name="sunroof" checked={inputs.sunroof} onChange={actualizarFormularioChecked}/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Label htmlFor="fechaCompra">Fecha</Label>
                        <DatePicker type="date" id="fechaCompra" name="fechaCompra" selected={inputs.fechaCompra} 
                            onChange={date => actualizarFormulario({target: {name: 'fechaCompra', value: date}})}/>
                    </FormGroup>
                </Col>
                
                <Button type="submit" color="primary">Agregar</Button>
                <Button type="button" color="success" onClick={e => seleccionarColor(e, '#000')}>Seleccionar Negro</Button>
            </Row>
        </Form>
}
export default CarForm;