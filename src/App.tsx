import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './Routing/NavBar';

import { Home } from './Routing/HomePage';
import { DashBoard } from './Routing/DashBoardPage';
import { About } from './Routing/AboutPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="home" element={<Home />} /> 
              
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        </Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
