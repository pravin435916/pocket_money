import React from "react";
import bank from "../assets/bank.png";
import Rating from '@mui/material/Rating';
import Whyus from "./Whyus";
import Plans from "./Plans";
import Reviews from "./Reviews";
import Faqs from "./Faqs";
export default function Home() {
  return (
    <>
      <div className="font-Sometype pt-5 Monox w-full h-screen flex justify-center items-center overflow-hidden text-white bg-[#1A1D3E]  sm:flex-col sm:gap-5">
        <div className="flex flex-col justify-center text-start text-7xl font-bold-700 sm:text-5xl sm:text-center">
          <span>Trusted and Secure</span>
          <span className="text-[#db2777] font-bold">Investment </span>
          <span> Platform</span>
          <button className=" w-56  mt-4 font-100 py-2 rounded-md bg-[#db2777] text-xl border-[#db2777] hover:bg-pink-500 sm:ml-20 sm:p-1 sm:w-42 ">
            Investment Now
          </button>
          <span className="mt-2 font-bold-700 ">A+ Rating</span>
          <div className="mt-5 flex gap-3 ">
            <span className="text-xl">With Best Rating </span>
          <Rating className="mt-2" name="size-large" defaultValue={4} size="small" />
          </div>
        </div>
        <img className="w-1/2 object-cover sm:w-full" src={bank} alt="" />
      </div>
      {/* <Carousel items={items} interval={3000} /> */}
      <Whyus />
      <Plans/>
      <Reviews/>
      <Faqs/>
    </>
  );
}
