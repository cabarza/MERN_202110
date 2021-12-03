import { Row, Table } from "reactstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";


const CarList = (props) => {

    const {deleteFn, editFn} = props;

    const {carList} = props;

    return (
        <Row>
            <Table>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Color</th>
                        <th>Año</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {carList.map((elem, i) => <tr key={i}>
                        <td>{elem.marca}</td>
                        <td style={{backgroundColor: elem.color}}></td>
                        <td>{elem.anio}</td>
                        <td>
                            <AiFillDelete style={{cursor:'pointer'}} onClick={e => deleteFn(elem._id)}/>
                            <AiFillEdit style={{cursor:'pointer'}} onClick={e => editFn(elem._id)}/>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
        </Row>
    );
}

export default CarList;