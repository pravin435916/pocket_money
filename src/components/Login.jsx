import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async (e) => {
    try {
       await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log('User Login successfully.');
      toast.success("Login Successfully");
      e.preventDefault();
      navigate("/");
    } catch (error) {
      console.error('Registration failed.',error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center text-center bg-[#1A1D3E]'>
    <div className="container pt-22 flex flex-col gap-3 max-w-md text-center ">
    <h1 className="text-4xl font-bold mb-6 text-[#db2777] overline">Login Page</h1>
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
      className="w-full bg-[#db2777] text-white p-2 rounded hover:bg-[#db2777]"
      onClick={handleRegister}
    >
      Login
    </button>
   
  </div>
  </div>
  );
}

export default Login;
