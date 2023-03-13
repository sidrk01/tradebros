import React from 'react'
import { useAuthorizationValue } from '../AuthorizationContext'
import './signOut.css'
import { signOut } from 'firebase/auth'
import { auth } from "../Firebase";

export default function SignOut() {

    const {currentUser} = useAuthorizationValue()

    // <div>
    //   
    // </div>
    return (
        <div className='center'>
          <div className='profile'>
            <h1>Profile</h1>
            <p><strong>Email: </strong>{currentUser?.email}</p>
            <p>
              <strong>Email verified: </strong>
              {`${currentUser?.emailVerified}`}
            </p>
            <button class="button-89" role="button" onClick={() => signOut(auth)}>SignOut</button>
          </div>
        </div>
    )
}
