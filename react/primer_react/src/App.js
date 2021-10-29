import Home from "./components/home2/home";
import Form from "./components/home2/form";
import Header from "./components/header/header";
import { useState } from "react";
import List from "./components/list/list";

function App() {

  const [lista, setLista] = useState([]);

  const agregarElemento = (item) => {
    setLista([...lista, item]);
  }

  return (
    <>
      <hr/>
      <Form agregar={agregarElemento}>
      </Form>
      <hr/>
      <List lista={lista}/>
    </>
  );
}

export default App;
