import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CardHome } from './cardhome';
import { CardAdd } from './cardadd';
import { CardEdit } from './cardedit';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardHome />}/>
        <Route path="/add" element={<CardAdd />}/>
        <Route path="/edit" element={<CardEdit />} />
      </Routes>
    </div>
  );
}

export default App;
