import React from "react";
import axios from "axios";
import "./Login.css";
export default function Login() {
    return (
        <div className='container'>
        <div className='form-box'>
            <h1>Sign Up</h1>
            <form>
                <div class="input-group">
                    <div class="input-field">
                        <i class = "fa solid fa-user"></i>
                        <input type="text" placeholder="UserName"></input>
                    </div>

                    <div class="input-field">
                        <i class = "fa solid fa-user"></i>
                        <input type="text" placeholder="Password"></input>
                    </div>

                    <div class="input-field">
                        <i class = "fa solid fa-user"></i>
                        <input type="text" placeholder="Name"></input>
                    </div>
                </div>
            </form>
         </div>
    </div>

    )
}