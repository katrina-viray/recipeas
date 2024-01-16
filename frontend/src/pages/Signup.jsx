import React, { useState } from 'react';

const Signup = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log('Logging in...', { email, password, rememberMe });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-t from-white to-main-purple">
      <div className="bg-white bg-opacity-20 p-12 rounded-3xl backdrop-filter backdrop-blur-md shadow-md">
        <h2 className="text-2xl font-semibold mb-8 text-main-purple text-center">Sign up</h2>
        <form>
          <div className="flex mb-4">
            <input
              type="text"
              id="first"
              className="flex-1 border border-white p-2 rounded text-main-purple focus:outline-none"
              placeholder="First Name *"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
            <div className="ml-4">
              <input
                type="text"
                id="last"
                className="flex-1 border border-white p-2 rounded text-main-purple focus:outline-none"
                placeholder="Last Name *"
                value={last}
                onChange={(e) => setLast(e.target.value)}
              />
            </div>
          </div>
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
          <button
            type="button"
            className="w-full bg-main-purple text-white p-1 rounded hover:bg-main-blue hover:text-white mb-4"
            onClick={handleLogin}
          >
            Sign up
          </button>
          <div className="text-center flex">
            <a href="/login" className="text-main-purple hover:text-second-purple">
              Already have an account? Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
