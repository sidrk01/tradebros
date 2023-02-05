
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Component }  from 'react';
import Learn from './Pages/Learn';
import Market from './Pages/Market';

function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/"/>
      <Route path="/learn" element={<Learn/>}/>
      <Route path="/market" element={<Market/>}/>
      <Route path="/pricing" exact/>
    </Routes>
  </Router>
);
}
export default App;
