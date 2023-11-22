import React from "react";

export default function Plans() {
  return (
    <>
    <div className="w-full overflow-hidden bg-[#1A1D3E] text-white">
     <div className="flex flex-col justify-center text-center mt-10 p-10">
      <span className="font-bold text-7xl sm:text-4xl" > <span className="text-pink-600">Investment </span>Plans</span>
      <span>Invest in our plans and earn up to 25% profit evry month</span>
      </div>
      <div className="flex gap-10 m-0 justify-center flex-wrap text-start">
        <div className="flex  p-4 border backdrop-blur-lg rounded-md">
            <span className="border p-2">30%</span>
            <div className="flex flex-col px-2">
                <span>Silver</span>
                <span>Invest 5000 to 20000 and gain 1% profit every working day</span>
            </div>
        </div>
        <div className="flex  p-4 border backdrop-blur-lg rounded-md">
            <span className="border p-2">30%</span>
            <div className="flex flex-col px-2">
                <span>Silver</span>
                <span>Invest 5000 to 20000 and gain 1% profit every working day</span>
            </div>
        </div>
        <div className="flex  p-4 border backdrop-blur-lg rounded-md">
            <span className="border p-2">30%</span>
            <div className="flex flex-col px-2">
                <span>Silver</span>
                <span>Invest 5000 to 20000 and gain 1% profit every working day</span>
            </div>
        </div>
        <div className="flex p-4 border backdrop-blur-lg rounded-md">
            <span className="border p-2">30%</span>
            <div className="flex flex-col px-2">
                <span>Silver</span>
                <span>Invest 5000 to 20000 and gain 1% profit every working day</span>
            </div>
        </div>
      </div>
      <div className="flex mt-10 justify-evenly items-center gap-10 p-10">
        <div className="flex flex-col gap-3 justify-center items-center">
            <span className="text-7xl sm:text-4xl font-bold text-pink-500">5k+</span>
            <span>Downloads</span>
        </div>
        <div  className="flex flex-col gap-3 justify-center items-center">
            <span className="text-7xl sm:text-4xl font-bold text-pink-500">100+</span>
            <span>Reviews</span>
        </div>
        <div  className="flex flex-col gap-3 justify-center items-center">
            <span className="text-7xl sm:text-4xl font-bold text-pink-500">120+</span>
            <span>Countries</span>
        </div>
      </div>
      </div>
      </>
  );
}
