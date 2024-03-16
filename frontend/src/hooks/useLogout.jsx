import {useAuthContext} from './useAuthContext'
import {useRecipesContext} from './useRecipesContext'


export const useLogout = () =>
{
  const {dispatch} = useAuthContext()
  const {dispatch : recipesDispatch} = useRecipesContext()

  const logout = () => {
    // to logout, all we need is to update the global state and 
    // delete the json web token from local storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({type: 'LOGOUT'})
    recipesDispatch({type: 'SET_RECIPES', payload: null})

  }
  return {logout}
}