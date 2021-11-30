import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';
import UserContext from '../../context/user-context';
import Header from '../home/header';
import ContactForm from './form';
import ContactList from './list';

const ContactAdmin = (props) => {

    const [list, setList] = useState([]);
    const [actualizar, setActualizar] = useState(false);

    const context = useContext(UserContext);

    const navigate = useNavigate();

    context.socket.on("contact_created_event", data => {
        console.log("contact_created_event", data);
        
        setList([
            ...list,
            data
        ]);
    });

    useEffect(() => {
        listarTodosLosContactos(null);
    }, [actualizar]);

    const listarContactosUsuario = (e) =>{
        e.stopPropagation();
        axios.get('/api/contacts/user')
        .then(resp => setList(resp.data.data))
        .catch(error => 
            swal.fire('Error', error.message, 'error'));
    }

    const listarTodosLosContactos = e => {
        e?.stopPropagation();
        axios.get('/api/contacts')
        .then(resp => setList(resp.data.data))
        .catch(error => 
            swal.fire('Error', error.message, 'error'));
    }

    const agregar = (data) => {
        axios.post('/api/contacts', data)
        .then(resp => {
            context.socket.emit("new_contact_event", resp.data.data);
            // Se agrega elemento creado al listado directamente evitando realizar una llamada al backend para recargar el listado
            setList([
                ...list,
                resp.data.data
            ]);
            navigate('./')
        }).catch(error => {
            console.log(error); // Revisar el mensaje de error
            Swal.fire('Error al crear el contacto', error?.message, 'error')
        });
    }

    const editar = (data) => {
        axios.put(`/api/contacts/${data._id}`, data)
            .then(resp => {
                setActualizar(!actualizar)
                navigate('./');
            })
            .catch(error => Swal.fire('Error al actualizar el contacto', error?.message, 'error'));
    }

    const eliminar = id => {
        if(id) {
            Swal.fire({
                title:'Eliminar el contacto',
                text: '¿Esta seguro que desea eliminar el contacto',
                icon:'question',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar!!!',
                cancelButtonText: 'No'
            }).then(resp => {
                if(resp.isConfirmed){
                    axios.delete(`/api/contacts/${id}`)
                    .then(resp => {
                        const lista = [...list];
                        lista.splice(lista.findIndex(e => e._id === id), 1);
                        setList(lista);
                    }).catch(error => Swal.fire('Error al eliminar el contacto', error?.message, 'error'));
                }
            })
        }
    }

    return <Container>
            <Header />
            <Row>
                <Link to={"./"}> Listado </Link>
                <Link to={"add"}> Agregar </Link>
                <a href="#" onClick={listarContactosUsuario}>Listar Contactos Usuario</a>
                <a href="#" onClick={listarTodosLosContactos}>Listar Todos los Contactos</a>
            </Row>
            <Routes>
                <Route index element={<ContactList  list={list} eliminar={eliminar}/>}/>
                <Route path="add" element={<ContactForm accion={agregar} />}/>
                <Route path="edit/:id" element={<ContactForm accion={editar} edicion={true}/>}/>
                <Route path="view/:id" element={<ContactForm ver={true}/>}/>
            </Routes>
    </Container>;
}

export default ContactAdmin;