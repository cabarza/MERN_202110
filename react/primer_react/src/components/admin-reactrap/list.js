import { Table } from "reactstrap";

const List = (props) => {
    return <Table>
        <thead>
            <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Color</th>
                <th>Fecha Compra</th>
            </tr>
        </thead>
        <tbody>
            {props.autos.map((a, i)=> <tr style={{backgroundColor: a.color}} key={i}>
                <td>{a.marca}</td>
                <td>{a.modelo}</td>
                <td>{a.color}</td>
                <td>{a.fechaCompra.toLocaleDateString('es-CL', { year: 'numeric', month: 'numeric', day: 'numeric' })}</td>
            </tr>)}
        </tbody>
    </Table>
}

export default List;