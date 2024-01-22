import { RecipesContext } from '../context/RecipeContext'
import { useContext } from 'react'

export const useRecipesContext = () => {
  // passing in the object with the state and dispatch function
  const context = useContext(RecipesContext)

  // if context is null, like if the ContextProvider is being used on a component
  // which isn't part of what the ContextProvider is wrapping. (like outside of App)
  if (!context){
    throw Error('useRecipesContext must be used inside a RecipeContextProvider')
  }

  return context
}