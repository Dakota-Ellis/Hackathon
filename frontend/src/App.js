import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Map from './Components/Map';
import Login from './Components/Login';

export const DataContext = createContext()

function App() {

  const [data, setData ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/location')
    .then((res) => res.json())
    .then(data => {
      setData(data)
    })
    .catch(error => console.log("Nah Brah.. not working"))
  })

  return (
    <>
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
    <DataContext.Provider value={data}>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/map' element={<Map />}/>
    </Routes>
    </DataContext.Provider>
    </>
  );
}

export default App;
