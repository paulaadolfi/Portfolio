import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import SobreMi from './pages/SobreMi'
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';


function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter>
          <Nav/>
          <Routes>
              <Route path='/' element={<SobreMi/>}/>
              <Route path='/Proyectos' element={<Proyectos/>}/>
              <Route path='/Contacto' element={<Contacto/>}/>
          </Routes>
        </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;