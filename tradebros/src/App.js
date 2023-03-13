
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import React, { Component, useEffect, useState }  from 'react';
import Learn from './Pages/Learn';
import Market from './Pages/Market';
import StockPerformance from './Pages/StockPerformance';
import Support from './Pages/Support';
import Login from './Pages/Login';
import Watchlists from './Pages/Watchlists';
import SignUp from './Pages/SignUp';
import { AuthorizationProvider } from './AuthorizationContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import VerifyEmail from './VerifyEmail';
import PrivateRoute from './Pages/PrivateRoute';
import SignOut from './Pages/SignOut';
import News from './Pages/News';
import Features from './Pages/Features'
import Pricing from './Pages/Pricing';

function App() {
  const [timeActive, setTimeActive] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])
  
  return (
    <Router>
      <Navbar/>
      <AuthorizationProvider value={{currentUser, timeActive, setTimeActive}}>
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <SignOut></SignOut>
            </PrivateRoute>
          }/>
          <Route path="/learn" element={<Learn/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/stock_performance" element={<StockPerformance/>}/>
          <Route path="/market" element={<Market/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/features" element={<Features/>}/>

          <Route path="/login" element={
            !currentUser?.emailVerified
            ? <Login/>
            : <Navigate to='/' replace/>
          }/>

          <Route path="/sign-up" element={
            !currentUser?.emailVerified
            ? <SignUp/>
            : <Navigate to ='/'  replace/>
          }/>



          <Route path="/watchlists" element={<Watchlists/>}/>
          <Route path='/verify-email' element={<VerifyEmail/>}/>
        </Routes>
      </AuthorizationProvider>
  </Router>
);
}
export default App;
