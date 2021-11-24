import logo from './logo.svg';
import './App.css';
import ContactAdmin from './components/contacts/admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import RegisterForm from './components/register/form';
import LoginForm from './components/login/login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/register" element={<RegisterForm />}/>
          <Route path="/contacts/*" element={<ContactAdmin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
