import { Link } from "@reach/router";
import { useEffect, useState } from "react";

const ContactView = (props) => {

    const [data, setData] = useState({});

    useEffect(() => {
        setData(props.contacts[props.id])
    }, [])

    return <>

        <h1>Nombre: {data.name}</h1>
        <h1>Email: {data.email}</h1>
        <h1>Teléfono: {data.phone}</h1>

        <Link to="/contacts/">Volver</Link>
    </>
}

export default ContactView;