import Home from "./components/home2/home";
import Form from "./components/home2/form";
import Header from "./components/header/header";
import { useState } from "react";

function App() {

  const [estado, setEstado] = useState({
    nombre: '',
    apellido: '',
    curso: ''
  });

  return (
    <>
      <Header data={estado}/>
      <Home data={{estado, setEstado}}>
      </Home>
      <hr/>
      <Form data={{estado, setEstado}}>
      </Form>
    </>
  );
}

export default App;
