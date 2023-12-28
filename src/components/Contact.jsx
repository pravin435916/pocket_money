import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registration() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      console.log('User registered successfully.');
      toast.success("User registered successfully.");
      navigate("/login");
    } catch (error) {
      console.error('Registration failed.', error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className='flex items-center justify-center h-screen  bg-[#1A1D3E]'>
      <div className="bg-[#1A1D3E] p-0 rounded shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-[#db2777] text-center overline">Registration Page</h1>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#db2777] text-black p-2 rounded hover:bg-[#db2777]"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
        <p className='mt-4 text-gray-600'>
          Already have an account? <Link className='text-[#db2777] underline' to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;
