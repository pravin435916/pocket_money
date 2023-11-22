import React from "react";
import { Link } from 'react-router-dom';
import { BiLogoPlayStore } from 'react-icons/bi';
import { AiFillApple } from 'react-icons/ai';
export default function Footer() {
  return (
    <div className="w-full p-10 pt-32  flex flex-col justify-center items-center bg-[#1A1D3E] overflow-hidden">
      <div className="flex flex-col justify-center items-center text-5xl text-white">
        <span> Get Ready To Started . It's</span>
        <span>
          {" "}
          <span className="text-pink-600"> Fast and Easy </span> App
        </span>
        <span className="text-2xl text-gray-400 mt-4 ">
          Download our Mobile App and start Your Investment
        </span>
      </div>
      <div className="flex mt-5 gap-10 text-white">
        
        <div className="flex gap-2 justify-center items-center border rounded p-2">
          <span className="text-5xl"><AiFillApple/></span>
          <div className="flex flex-col text-sm">
            
            <span>Download it on</span>
            <a className="no-underline text-white" href="https://play.google.com/store/apps/details?id=com.pocketmoney.user"><span>App Store</span></a>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center border rounded p-2">
          <span className="text-5xl"> <BiLogoPlayStore/> </span>
          <div className="flex flex-col text-sm">
            <span>Get it on</span>
            <a className="no-underline text-white" href="https://play.google.com/store/apps/details?id=com.pocketmoney.user"><span>Google Playstore</span></a>
          </div>
        </div>
      </div>
      <div className="w-max mt-10 border-xl flex justify-center items-center text-white gap-20 p-10 border rounded-xl backdrop-blur-lg sm:flex-col">
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-pink-500">Pocket </span>
            <span>Money</span>
          </div>
          <span>Join Our Newsletter</span>
          <div className="flex gap-1">
          <input className="w-36 rounded" type="email" name="email" id="email" />
           <button className="bg-pink-700 p-1 rounded">Subscribe</button>
          </div>
          <span>We only send interesting and relevant emails</span>
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="font-bold">Links</span>
          <Link to="/">Home</Link>
          <Link to="/whyus">Whyus</Link>
          <Link to="/Reviews">Reviews</Link>
          <Link to="/Faqs">FAQs</Link>
          <Link to="/contactus">Contact us</Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Legal</span>
          <span>Terms of use</span>
          <span>Tersm and Conditions </span>
          <span>Privacy and Polcy</span>
          <span>Cookies Privacy</span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Products</span>
          <span>Socials</span>
          <span>Live Chat</span>
          <span>Service</span>
          <span>Mobile</span>
        </div>
      </div>
    </div>
  );
}
