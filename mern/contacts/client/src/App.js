import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import io from 'socket.io-client';

function App() {
  const [socket] = useState(io.connect("/"));

  useEffect(() => {
    socket.on("welcome_event", data => console.log(data));
  }, [])

  return ( 
      <BrowserRouter>
        <Routes>
          <Route index path="/*" element={<Home socket={socket}/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
