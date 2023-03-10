import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthorizationValue } from '../AuthorizationContext'

export default function PrivateRoute({children}) {
  const {currentUser} = useAuthorizationValue()

  if(!currentUser?.emailVerified) {
    return <Navigate to='/login' replace/>
  }
  return children
}
