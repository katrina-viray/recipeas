import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })

  useEffect(() => {
    // parse into an object to use in JS bc when in localStorage, it's a json string
    const user = JSON.parse(localStorage.getItem('user'))

    if (user){
      dispatch({type: 'LOGIN', payload: user})
    }
  }, [])

  console.log('AuthContext state: ', state)

  return (
    // wrapping our root app component, letting us provide our state value 
    // to the entire application.
    <AuthContext.Provider value = {{...state, dispatch}}>
      { children}
    </AuthContext.Provider>
  )
}