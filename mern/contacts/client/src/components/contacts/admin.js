import {useEffect, useState} from 'react';
import { Container } from 'reactstrap';
import ContactList from './list';
import axios from 'axios';
import swal from 'sweetalert2';

const ContactAdmin = (props) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/contacts')
        .then(resp => setList(resp.data.data))
        .catch(error => 
            swal.fire('Error', error.message, 'error'));
    }, []);
    
    return <Container>
        <ContactList  list={list}/>
    </Container>;
}

export default ContactAdmin;