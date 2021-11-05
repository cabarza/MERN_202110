import { Table } from "reactstrap";
import { MdPageview } from "react-icons/md";
import {AiOutlineDelete} from "react-icons/ai";
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
                    <Link to={`/contacts/view/${i}`}><MdPageview/></Link>
                    <AiOutlineDelete color="red" onClick={e => props.deleteContact(e, i)}/>
                </td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
            </tr>)}
        </tbody>
    </Table>
}

export default ContactList;