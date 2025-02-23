import React from "react";
import { PiSquaresFourLight } from "react-icons/pi";

const CountSection = () => {
  return (
    <div className="border w-[200px] h-[150px] shadow shadow-md rounded-lg flex flex-col jus">
      <PiSquaresFourLight className="text-3xl font-bold text-green-700" />

      <div className=" flex  flex-col border">
        <h1 className="font-bold  text-2xl">5</h1>
        <p className=" text-lg ">Total Project</p>
      </div>
    </div>
  );
};

export default CountSection;
