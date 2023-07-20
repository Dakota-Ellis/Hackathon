import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Map from './Components/Map';
import Login from './Components/Login';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>

    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/map' element={<Map />}/>
    </Routes>
    </>
  );
}

export default App;
