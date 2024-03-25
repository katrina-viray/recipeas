import {useState} from 'react'
import {useAuthContext} from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const {dispatch} = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(import.meta.env.VITE_API_URL + '/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })

    // once we get a response, to get the json data from it, use response.json
    const json = await response.json()

    if(!response.ok){
      setIsLoading(false)
      setError(json.error)
    }
    if(response.ok){
      // save user to local storage w/json web token
      localStorage.setItem('user', JSON.stringify(json))

      // update auth context
      dispatch({type: 'LOGIN', payload: json})

      setIsLoading(false)

    }

  }

  return {login, isLoading, error}
}

