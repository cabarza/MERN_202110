import { Link, Router } from "@reach/router";
import { useState } from "react";
import { Col, Row } from "reactstrap";
import Swal from "sweetalert2";
import ContactForm from "./form";
import ContactList from './list';
import ContactView from "./view";

const ContactAdmin = (props) => {
    const [contacts, setContacts] = useState([]);

    const create = (data) => {
        console.log(data);
        setContacts([
            ...contacts,
            data
        ]);
    }

    const deleteContact = (e, i) => {
        Swal.fire({
            title:'Seguro?',
            text:'Está seguro de eliminar el contacto?',
            icon:'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminalo!!!',
            cancelButtonText: 'No'
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
                <Link to="/">Inicio</Link>&nbsp;
                <Link to="/contacts/form">Form</Link>&nbsp;
                <Link to="/contacts/view/123456">View</Link>
            </Col>
        </Row>
        <Row>
            <Router>
                <ContactList path="/" contacts={contacts} deleteContact={deleteContact}/>
                <ContactForm path="form" create={create}/>
                <ContactView path="view/:id" contacts={contacts}/>
            </Router>
        </Row>
    </>
}

export default ContactAdmin;