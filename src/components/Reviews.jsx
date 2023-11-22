import React from 'react'
import Rating from '@mui/material/Rating';
import { FaUserAlt } from 'react-icons/fa';
export default function Reviews() {
  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden p-10 text-white bg-[#1A1D3E] sm:items-start'>
      <span className='text-3xl mt-20'>Feedback</span>
      <span className='text-5xl font-bold'>Trusted By <span className='text-pink-600'>Thousands</span></span>
      <div className='w-full flex justify-center items-center p-16 sm:p-1 gap-5 sm:flex-col '>
        <div className='w-96 h-72  flex flex-col justify-evenly items-start p-4  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100'>
        <div className='flex gap-3'>
          <span className='text-2xl'><FaUserAlt/></span>
          <span>  Name</span>
          </div>
          <Rating className="mt-2" name="size-large" defaultValue={4} size="small" />
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ut fugit, fuga minima veritatis eaque et voluptas accusantium odit quae ea? At, corrupti assumenda? Soluta, facere quam ipsam ex quaerat eaque nihil pariatur explicabo.</span>
        </div>
        <div className='w-96 h-72  flex flex-col justify-evenly items-start p-4  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100'>
        <div className='flex gap-3'>
          <span className='text-2xl'><FaUserAlt/></span>
          <span>  Name</span>
          </div>
          <Rating className="mt-2" name="size-large" defaultValue={5} size="small" />
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ut fugit, fuga minima veritatis eaque et voluptas accusantium odit quae ea? At, corrupti assumenda? Soluta, facere quam ipsam ex quaerat eaque nihil pariatur explicabo.</span>
        </div>
        <div className='w-96 h-72  flex flex-col justify-evenly items-start p-4  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100'>
          <div className='flex gap-3'>
          <span className='text-2xl'><FaUserAlt/></span>
          <span>  Name</span>
          </div>
          <Rating className="mt-2" name="size-large" defaultValue={4} size="small" />
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ut fugit, fuga minima veritatis eaque et voluptas accusantium odit quae ea? At, corrupti assumenda? Soluta, facere quam ipsam ex quaerat eaque nihil pariatur explicabo.</span>
        </div>
      </div>
    </div>
  )
}
