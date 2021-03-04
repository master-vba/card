import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CardHome } from './cardhome';
import { CardAdd } from './cardadd';
import { CardEdit } from './cardedit';
import { Link } from 'react-router-dom'





function App() {
  return (
    <div className="App">
       <nav>
       <Link to="/home">Списак</Link>
        <Link to="/add">Додај картицу</Link>
        <Link to="/edit">Измени податке</Link>
        
			</nav>
     

      <Routes>
        <Route path="/home" element={<CardHome />}/>
        <Route path="/add" element={<CardAdd />}/>
        <Route path="/edit" element={<CardEdit />} />
      </Routes>
    </div>
  );
}

export default App;
