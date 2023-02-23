import React, {useContext} from 'react'

const AuthContext = React.createContext()

/*
    This function is a way to share data with components without a component tree without using props.
    Manages the userState
    Authorization.Provider allows us to share the values of a user's state to all the children of .provider
*/

export function AuthorizationProvider({children, value}) {
    return (
        <AuthorizationProvider.Provider value={value}>
            {children}
        </AuthorizationProvider.Provider>
    )
}

export function useAuthorizationValue() {
    return useContext(AuthContext)
}
