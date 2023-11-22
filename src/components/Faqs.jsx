import React from "react";
import faxx from "../assets/faxx.png";
export default function Faqs() {
  return (
    <div className="w-full pt-24 flex justify-center items-center gap-36 bg-[#1A1D3E] overflow-hidden sm:flex-col sm:gap-3 ">
      <div className="w-1/2 flex justify-center items-center">
        <img className="w-2/3 ml-16 " src={faxx} alt="" />
      </div>
      <div className="w-1/2 text-xl text-white flex flex-col sm:mr-38">
        <span className="text-5xl">
          Any <span className="text-pink-600">Questions</span>
        </span>
        <span className="text-5xl pb-10">Find Answers Here</span>
        <div className="flex flex-col gap-3">
          <details >
            <summary className="w-96 border-top p-3 sm:w-64 ">Epcot Center</summary>
            <p className="text-xl ml-5">
              Epcot is a theme park at Walt Disney World Resort featuring
              exciting attractions, international pavilions, award-winning
              fireworks and seasonal special events.
            </p>
          </details>
          <details>
            <summary className="w-96 border-top p-3 sm:w-64" >Epcot Center</summary>
            <p className="text-xl ml-5">
              Epcot is a theme park at Walt Disney World Resort featuring
              exciting attractions, international pavilions, award-winning
              fireworks and seasonal special events.
            </p>
          </details>
          <details>
            <summary className="w-96 border-top p-3 sm:w-64">Epcot Center</summary>
            <p className="text-xl ml-5">
              Epcot is a theme park at Walt Disney World Resort featuring
              exciting attractions, international pavilions, award-winning
              fireworks and seasonal special events.
            </p>
          </details>
          <details>
            <summary className="w-96 border-top border-bottom p-3 sm:w-64">Epcot Center</summary>
            <p className="text-xl ml-5">
              Epcot is a theme park at Walt Disney World Resort featuring
              exciting attractions, international pavilions, award-winning
              fireworks and seasonal special events.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
