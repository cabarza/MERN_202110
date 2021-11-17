import { List, Row, Table } from 'reactstrap';

const ContactList = (props) => {


    return <Row>
        <Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                { props.list && props.list.map((elem, i) => <tr key={i}>
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