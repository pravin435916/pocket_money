import React, { useState } from 'react'
import { FaBarsStaggered } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const mobile = window.innerWidth<=768 ? true : false;
  const [menu,setMenu] = useState(false);

  const handleclick = () => {
       setMenu(!menu);
  }
  return (
    <>
      <div className="w-full fixed top-0 left-0 text-white flex justify-evenly p-10 overflow-hidden bg-[#1A1D3E] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"> 
        <div className='flex gap-1'>
        <span className='text-[#db2777] '>POCKET</span>
        <span >MONEY</span>
        </div>
          { (menu=== false && mobile === true) ?
        <span className='text-4xl hidden sm:flex sm:fixed sm:top-8 sm:right-4 z-10' 
        onClick={handleclick}> { menu ? <RxCross2/>  : <FaBarsStaggered/> } </span> :
        <ul className='flex justify-between gap-12  sm:flex-col text-xl'>
        <Link onClick={()=> setMenu(false)} className='text-white no-underline' to='/'>Home</Link>
        <Link onClick={()=> setMenu(false)} className='text-white no-underline' to='/whyus' >Whyus</Link>
        <Link onClick={()=> setMenu(false)} className='text-white no-underline' to='/Reviews'>Reviews</Link>
        <Link onClick={()=> setMenu(false)} className='text-white no-underline' to='/Faqs'>FAQs</Link>
        <Link onClick={()=> setMenu(false)} className='text-white no-underline' to='/contactus'>Contact us</Link>
        </ul>
        }
        <button className='p-2 h-max rounded-md bg-[#db2777]  hover:bg-pink-500 sm:hidden'>GET STARTED</button>
      </div>
    </>
  )
}
