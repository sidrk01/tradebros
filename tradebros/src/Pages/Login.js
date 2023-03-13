import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import "./signUp.css";



export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const login = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            if(!auth.currentUser.emailVerified) {
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    navigate('/verify-email')
                })
                .catch(err => alert(err.message))
            }
            else {
                navigate('/')
            }
        })
        .catch(err => setError(err.message))
    }

    return (
        <div className = 'container'>
        <div className='center'>
        <div className='auth'>
          <div className='form-box'>
          <h1>Login</h1>
          {error && <div className='auth__error'>{error}</div>}
          <form onSubmit={login} name='login_form'>
            <div className='input-field'>
            <input 
              type='email' 
              value={email}
              required
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='input-field'>
            <input 
              type='password'
              value={password}
              required
              placeholder='Enter your password'
              onChange={e => setPassword(e.target.value)}/>
              </div>
  
            <button type='submit'>Login</button>
          </form>
          <p className = 'link'>
            Don't have an account? 
            <Link to='/sign-up'>Create one here</Link>
          </p>
          </div>
        </div>
      </div>
    </div>
    )
}