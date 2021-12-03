import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Swal from 'sweetalert2';
import LoginForm from '../login/login';
import RegisterForm from '../register/form'
import UserContext from '../../context/user-context';
import CarAdmin from '../car-admin/admin';

const SESSION_USER = 'SESSION_USER';

export { SESSION_USER };

const Home = () => {

    const [user, setUser] = useState({});
  
    const navigate = useNavigate();

    const login = (inputs) => {
        axios.post('/api/login', inputs)
            .then(resp => {
                if(resp.data.ok) {
                    setUser(resp.data.data);
                    sessionStorage.setItem(SESSION_USER, JSON.stringify(resp.data.data));
                    navigate('/cars');
                } else {
                    Swal.fire('Login', resp.data.message, 'error');
                }
            })
            .catch(err => {
                console.log(err);

            })
    }

    const logout = () => {
        setUser(null);
        sessionStorage.clear();
        navigate('/');
    }

    useEffect(() => {
        if(sessionStorage.getItem(SESSION_USER)) {
            setUser(JSON.parse(sessionStorage.getItem(SESSION_USER)));
            navigate('/cars');
        } else {
            navigate('/');
        }

    }, []);
    

    return (
        <UserContext.Provider value = {{user, setUser, login, logout}}>
            <Container>
                <Routes>
                    <Route path="/" index element={<LoginForm />}></Route>
                    <Route path="/register" element={<RegisterForm />}></Route>
                    <Route path="/cars/*" element={<CarAdmin />}></Route>
                </Routes>
            </Container>
        </UserContext.Provider>
    );
}

export default Home;