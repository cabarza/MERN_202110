import { Link } from 'react-router-dom';
import { List, Row, Table } from 'reactstrap';
import {AiFillDelete, AiFillEdit, AiFillEye} from 'react-icons/ai';
import { useContext } from 'react';
import UserContext from '../../context/user-context';

const ContactList = (props) => {

    const context = useContext(UserContext);

    const eliminar = (e, id) => {
        e.stopPropagation();
        if(id) {
            props.eliminar(id);
        }
    }

    return <Row>
        <Table>
            <thead>
                <tr>
                    <th>Acciones</th> 
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                { props.list && props.list.map((elem, i) => <tr key={i}>
                    <td>
                        { context.user.id === elem.user[0]._id && <Link to={`edit/${elem._id}`} style={{margin:'5px'}}><AiFillEdit/></Link> }
                        { context.user.id === elem.user[0]._id && <AiFillDelete color='red' onClick={e => eliminar(e, elem._id)} style={{margin:'5px'}}/> }
                        <Link to={`view/${elem._id}`} style={{margin:'5px'}}><AiFillEye/></Link>
                    </td>
                    <td>{elem.name}</td>
                    <td>{elem.email}</td>
                    <td>{elem.phone}</td>
                    <td>{elem.age}</td>
                </tr>)}
            </tbody>
        </Table>
    </Row>;
}

export default ContactList;