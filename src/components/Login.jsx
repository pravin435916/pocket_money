import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async (e) => {
    try {
      await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log('User Login successfully.');
      alert("Login Successfully");
      e.preventDefault();
      navigate("/");
    } catch (error) {
      console.error('Registration failed.',error);
      alert("Login failed");
    }
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-start bg-[#1A1D3E]'>
    <div className="container pt-36 max-w-md text-center ">
    <h1 className="text-3xl font-bold mb-4 text-white">Login Page</h1>
    <input
      type="email"
      placeholder="Email"
      className="w-full p-2 mb-2 border border-gray-300 rounded"
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="Password"
      className="w-full p-2 mb-4 border border-gray-300 rounded"
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button
      className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      onClick={handleRegister}
    >
      Login
    </button>
  </div>
  </div>
  );
}

export default Login;
