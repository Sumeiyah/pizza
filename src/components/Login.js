// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here (e.g., check username and password)
    console.log('Login credentials:', { username, password });
    // Clear the form after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div className=" flex items-center justify-center bg-gray-900 min-h-screen py-16">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-cyan-200 to-blue-500 p-8 rounded-lg shadow-md max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;


