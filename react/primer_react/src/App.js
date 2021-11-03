import Home from "./components/home2/home";
import Form from "./components/home2/form";
import Header from "./components/header/header";
import { useState } from "react";
import List from "./components/list/list";
import Admin from "./components/admin-reactrap/admin";
import Pokemones from "./components/admin-reactrap/pokemones";

function App() {

  const [lista, setLista] = useState([]);

  const agregarElemento = (item) => {
    setLista([...lista, item]);
  }

  return (
    <>
      <Admin />
      <Pokemones/>
    </>
  );
}

export default App;
