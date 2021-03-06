import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import UserContext from "../../context/user-context";
import LoginForm from "../login/login";
import RegisterForm from "../register/form";
import ContactAdmin from '../contacts/admin'; 
import axios from "axios";
import Swal from "sweetalert2";

const SESSION_USER = 'SESSION_USER';

export { SESSION_USER };

const Home = (props) => {
    const {socket} = props;

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const login = (inputs) => {
        axios.post('/api/login', inputs)
            .then(resp => {
                if(resp.data.ok) {
                    setUser(resp.data.data);
                    sessionStorage.setItem(SESSION_USER, JSON.stringify(resp.data.data));
                    navigate('/contacts/');
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
        navigate('/login');
    }
  
    useEffect(() => {
        if(sessionStorage.getItem(SESSION_USER)) {
            setUser(JSON.parse(sessionStorage.getItem(SESSION_USER)));
            navigate('/contacts/');
        } else {
            navigate('/login');
        }

    }, []);
  
    return ( 
      <UserContext.Provider value={{user, setUser, login, logout, socket}}>
          <Routes>
            <Route path="/login" element={<LoginForm />}/>
            <Route path="/register" element={<RegisterForm />}/>
            <Route path="/contacts/*" element={<ContactAdmin/>}/>
          </Routes>
      </UserContext.Provider>
    );
}

export default Home;

