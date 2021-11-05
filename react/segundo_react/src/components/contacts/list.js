import { Table } from "reactstrap";
import {AiFillDelete, AiFillEdit, AiFillEye} from "react-icons/ai";
import { Link } from "@reach/router";

const ContactList = (props) => {

    return <Table>
        <thead>
            <tr>
                <th>Acciones</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
            </tr>
        </thead>
        <tbody>
            {props.contacts.map((c, i) => <tr key={i}>
                <td>
                    <Link to={`/contacts/view/${i}`}><AiFillEye size="30px" color="green"/></Link>
                    <Link to={`/contacts/update/${i}`}><AiFillEdit size="30px" color="blue"/></Link>
                    <AiFillDelete size="30px" style={{cursor: 'hand'}} color="red" onClick={e => props.deleteContact(e, i)}/>
                </td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
            </tr>)}
        </tbody>
    </Table>
}

export default ContactList;