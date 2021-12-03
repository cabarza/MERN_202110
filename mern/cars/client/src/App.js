import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';


function App() {
   return (
          <BrowserRouter>
            <Routes>
              <Route index path="/*" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
  );
}

export default App;
