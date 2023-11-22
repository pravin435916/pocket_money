import React from 'react'
import stock from '../assets/stock.png'
import wallet from '../assets/wallet.png'
import graph from '../assets/graph.png'
import Footer from './Footer'
export default function Whyus() {
  return (
    <>
    <div className='w-full h-screen sm:pt-10 sm:h-full overflow-hidden flex flex-col justify-center items-center bg-[#1A1D3E] text-6xl font-bold text-white'>
     <div className='flex justify-center items-center gap-4 pt-20 leading-5 sm:flex-col'> 
      <span>Trusted</span><span className='text-[#db2777]'>Investment</span><span>Platform</span>
     </div>
     <div className='flex justify-center items-center mt-3'>
      <span className='text-xl font-thin sm:text-xs'>Pockey Money has a variety features that make it the best place of investment</span>
     </div>
      <div className='flex justify-center items-center gap-6 text-xl mt-10 sm:gap-2 sm:flex-col '>
           <div className='w-96 sm:w-64 sm:p-1  border rounded-2xl p-7'>
            <div className='flex flex-col'>
            <img className='scale-100 hover:scale-90 transition ease-in-out delay-50' src={stock} alt="" />
               <span>Best Exchange Rate</span>
               <span className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime eos laborum.</span>
               </div>
           </div>
           <div className='w-96 sm:w-64  sm:p-1 border rounded-2xl p-7'>
            <div className='flex flex-col'>
           <img className='scale-100 hover:scale-90 transition ease-in-out delay-50' src={wallet} alt="" />
               <span>Protected By Ensurance</span>
               <span className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime eos laborum.</span>
               </div>
           </div>
           <div className='w-96 sm:w-64 sm:p-1 border rounded-2xl p-7'>
           <div className='flex  flex-col'>
           <img className='w-78 scale-100 hover:scale-90 transition ease-in-out delay-50' src={graph} alt="" />
                <span>secure By Storage </span>
                <span className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime eos laborum.</span>
                </div>
           </div>
      </div>
    </div>
    </>
  )
}
