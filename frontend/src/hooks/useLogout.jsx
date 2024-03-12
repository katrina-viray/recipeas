import {useAuthContext} from './useAuthContext'

export const useLogout = () =>
{
  const {dispatch} = useAuthContext()
  const logout = () => {
    // to logout, all we need is to update the global state and 
    // delete the json web token from local storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({type: 'LOGOUT'})

  }
  return {logout}
}