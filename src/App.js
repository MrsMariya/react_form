import './App.css';
import React from 'react';
import { Login } from './components/Login.js';
import { Register } from './components/Register';
import { HomePage } from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';


function App() {
 

  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>       
     </Routes>
    </div>
  );
}

export default App;
