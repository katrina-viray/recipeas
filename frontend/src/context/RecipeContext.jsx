import { createContext, useReducer } from 'react'

export const RecipesContext = createContext()

// the dispatch function fires this function
export const recipesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return {
        recipes : action.payload
      }
    case 'CREATE_RECIPE':
      return {
        // adding new recipe and then appending already existing ones with ...
        recipes: [action.payload, ...state.recipes]
      }
    case 'DELETE_RECIPE':
    return {
      recipes: state.recipes.filter((r) => r._id !== action.payload._id)
    }
    default:
      return state
  }
}

export const RecipesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipesReducer, {
    recipes: null
  })


  return (
    // using ...state to spread out the properties inside the recipes object
    <RecipesContext.Provider value={{...state, dispatch}}>
      { children }
    </RecipesContext.Provider>
  )
}