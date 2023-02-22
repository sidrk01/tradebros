
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Component }  from 'react';
import Learn from './Pages/Learn';
import Market from './Pages/Market';
import StockPerformance from './Pages/StockPerformance';
import Support from './Pages/Support';
import Login from './Pages/Login';
import Watchlists from './Pages/Watchlists';

function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/"/>
      <Route path="/learn" element={<Learn/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/stock_performance" element={<StockPerformance/>}/>
      <Route path="/market" element={<Market/>}/>
      <Route path="/pricing" exact/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/watchlists" element={<Watchlists/>}/>
    </Routes>
  </Router>
);
}
export default App;
