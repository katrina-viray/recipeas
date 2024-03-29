import React, { useState } from 'react';
import {useLogin} from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const {login, error, isLoading} = useLogin()

  const handleLogin = async (e) => {
    e.preventDefault();
    
    await login(email, password)

  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-t from-white to-main-purple">
      <div className="bg-white bg-opacity-20 p-12 rounded-3xl backdrop-filter backdrop-blur-md shadow-md">
        <h2 className="text-2xl font-semibold mb-8 text-main-purple text-center">Sign in</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full border border-white p-2 rounded text-main-purple focus:outline-none"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="w-full border border-white p-2 rounded text-main-purple focus:outline-none"
              placeholder="Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/*
            <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe" className="text-white">
              Remember Me
            </label>
          </div>
          */}
          <button
            disabled = {isLoading}
            type="button"
            className="w-full bg-main-purple text-white p-1 rounded hover:bg-main-blue hover:text-white mb-4"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="text-center flex">
            <a href="/signup" className="text-main-purple hover:text-second-purple">
            Don't have an account? Sign up
            </a>
            {/*
              <p className="text-white ml-12">
              <a href="/forgot-password" className="text-main-purple hover:text-second-purple">
                Forgot password
              </a>
            </p>
            */}

            <p className="text-white ml-40">
              
            </p>
          </div>
          <div className="pt-5">
            {error && <div 
            className=" w-64 mx-auto text-center pt-2 pb-2 text-red-500 bg-red-50 border-2 border-red-500 rounded-lg"
            >{error}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
