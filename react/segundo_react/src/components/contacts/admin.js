import { Link, Router } from "@reach/router";
import { useState } from "react";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { Col, Row } from "reactstrap";
import Swal from "sweetalert2";
import ContactForm from "./form";
import ContactList from './list';
import ContactView from "./view";

const ContactAdmin = (props) => {
    const [contacts, setContacts] = useState([]);

    const create = (data) => {
        setContacts([
            ...contacts,
            data
        ]);
    }

    const update = (data, i) => {
        const list = [...contacts];
        list.splice(i, 1, data);
        setContacts([
            ...list,
        ]);
    }

    const deleteContact = (e, i) => {
        Swal.fire({
            title:'Seguro?',
            text:'Está seguro de eliminar el contacto?',
            icon:'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminalo!!!',
            cancelButtonText: 'No',
            confirmButtonColor: 'red'
        }).then(resp => {
            if(resp.isConfirmed) {
                setContacts(contacts.filter((e, indice) => indice != i));
            }
        })
    }

    return <>
        <Row>
            <Col xs={6} md={9}>
                <h1>Contactos</h1>
            </Col>
            <Col xs={6} md={3}>
                <Link to="/"><AiFillHome size="30px" color="black"/></Link>
                <Link to="/contacts/create" style={{marginLeft: '20px'}}><AiFillPlusCircle size="30px" color="orange"/></Link>
            </Col>
        </Row>
        <Row>
            <Router>
                <ContactList path="/" contacts={contacts} deleteContact={deleteContact}/>
                <ContactForm path="create" create={create} />
                <ContactForm path="update/:id" update={update} contacts={contacts}/>
                <ContactView path="view/:id" contacts={contacts}/>
            </Router>
        </Row>
    </>
}

export default ContactAdmin;