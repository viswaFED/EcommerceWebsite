import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Index';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Store from './Pages/Store';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Home'  element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/Store' element={<Store/>}/>
      </Routes>
    </Router>
  );
}

export default App;