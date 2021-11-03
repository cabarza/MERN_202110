const List = (props) => {
    return <table>
        <thead>
            <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Color</th>
            </tr>
        </thead>
        <tbody>
            {props.autos.map((a, i)=> <tr style={{backgroundColor: a.color}} key={i}>
                <td>{a.marca}</td>
                <td>{a.modelo}</td>
                <td>{a.color}</td>
            </tr>)}
        </tbody>
    </table>
}

export default List;