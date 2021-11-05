import { Link, useNavigate } from '@reach/router';
import { Button, Row } from 'reactstrap';

const Home = (props) => {
    const navigate = useNavigate()
    const goToContacts = (e) => {
        navigate('/contacts');
    } 

    return <>
        <Row>
            <h1>Bienvenidos</h1>
        </Row>

        {/* <Link to="/contacts">Contactos</Link> */}
        <Button onClick={goToContacts}>Contactos</Button>
    </>
}

export default Home;