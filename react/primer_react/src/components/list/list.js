const List = (props) => {
    return <>
        <table>
            <thead>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Curso</th>
            </thead>
            <tbody>
                {props.lista.map((o, i) => <tr key={i}>
                    <td>{o.nombre}</td>
                    <td>{o.apellido}</td>
                    <td>{o.curso}</td>
                </tr>
                )}
            </tbody>
        </table>
    </>
}

export default List