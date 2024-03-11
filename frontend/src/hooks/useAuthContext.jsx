//import { RecipesContext } from '../context/AuthContext'
import { useContext } from 'react'

export const useAuthContext = () => {
  // passing in the object with the state and dispatch function
  const context = useContext(AuthContext)

  // if context is null, like if the ContextProvider is being used on a component
  // which isn't part of what the ContextProvider is wrapping. (like outside of App)
  if (!context){
    throw Error('useAuthContext must be used inside a AuthContextProvider')
  }

  return context
} 