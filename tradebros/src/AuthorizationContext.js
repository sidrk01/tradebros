import React, {useContext} from 'react'

const AuthorizationContext = React.createContext()

export function AuthorizationProvider({children, value}) {
  return (
    <AuthorizationContext.Provider value={value}>
      {children}
    </AuthorizationContext.Provider>
  )
}

export function useAuthorizationValue(){
  return useContext(AuthorizationContext)
}
