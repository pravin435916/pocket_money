import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Contact() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async (e) => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      console.log('User registered successfully.');
      alert("User registered successfully.");
      e.preventDefault();
      navigate("/Login");
    } catch (error) {
      console.error('Registration failed.',error);
    }
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center text-center bg-[#1A1D3E]'>
    <div className="container w-full max-w-md flex flex-col justify-center">
    <h1 className="text-3xl font-bold mb-4 text-white">Registration Page</h1>
    <input
      type="text"
      placeholder="Username"
      className="w-full  p-2 mb-2 border border-gray-300 rounded"
      onChange={(e) => setUsername(e.target.value)}
      required
    />
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
      Register
    </button>
  </div>
  </div>
  );
}

export default Contact;
