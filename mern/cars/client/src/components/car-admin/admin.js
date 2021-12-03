import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { Col, Row } from "reactstrap";
import CarList from "./list";
import {GoDiffAdded} from 'react-icons/go';
import CarForm from "./form";
import axios from "axios";
import Swal from "sweetalert2";

const CarAdmin = (props) => {
    
    const [carList, setCarList] = useState([]);
    
    const navigate = useNavigate();

    const createCar = (data) => {
        axios.post('/api/cars', data).then(resp => {
            if(!resp.data.error) {
                setCarList([...carList, resp.data.data]);
            } else {
                Swal.fire('Error', resp.data.message, 'error');
            }
        }).catch(error => console.log('error', error));
    }

    const updateCar = (data) => {
        axios.put(`/api/cars/${data._id}`, data).then(resp => {
            if(!resp.data.error) {
                let index = carList.findIndex(c => c._id == data._id);
                if(index => 0) {
                    let cars = [...carList];
                    cars.splice(index, 1, resp.data.data);
                    setCarList(cars); 
                }
            } else {
                Swal.fire('Error', resp.data.message, 'error');
            }
        }).catch(error => console.log('error', error));
    }

    const deleteCar = (id) => {
        axios.delete(`/api/cars/${id}`).then(resp => {
            if(!resp.data.error) {
                const cars = carList.filter(c => c._id !== id);
                setCarList(cars);
                Swal.fire('Bien!!!', resp.data.message, 'success');
            } else {
                Swal.fire('Error', resp.data.message, 'error');
            }
        }).catch(error => console.log('error', error));
    }

    const goToEditCar = (id) => {
        navigate(`/cars/${id}`);
    }

    useEffect(() => {
        axios.get('/api/cars').then(resp => {
            if(!resp.data.error) {
                setCarList(resp.data.data);
            } else {
                Swal.fire('Error', resp.data.message, 'error');
            }
        }).catch(error => console.log('error', error));
    }, [])

    return (
        <>
            <Row>
                <Col xs={10}>
                    <h1>Mantener de Vehículos </h1>
                </Col>
                <Col xs={2}>
                    <GoDiffAdded onClick={e => navigate('/cars/new')} style={{cursor: 'pointer'}}/>
                </Col>
            </Row>
            <Row>
                <Routes>
                    <Route path="/" index element={<CarList carList={carList} deleteFn={deleteCar} editFn={goToEditCar}/> }/> 
                    <Route path="new" index element={<CarForm save={createCar}/>}/> 
                    <Route path="/:id" index element={<CarForm save={updateCar}/>}/> 
                </Routes>
            </Row>   
        </>
    );
}

export default CarAdmin;