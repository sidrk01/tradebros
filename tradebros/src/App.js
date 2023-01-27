
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Component }  from 'react';
import Learn from './Pages/Learn';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact />
      <Route path="/learn" exact element={<Learn/>}/>
      <Route path="/pricing" exact/>
    </Routes>
  </Router>
);
}
export default App;
