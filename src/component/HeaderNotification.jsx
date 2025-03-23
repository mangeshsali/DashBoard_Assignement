import React from "react";
import { CgClose } from "react-icons/cg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const HeaderNotification = () => {
  return (
    <div className=" bg-[#1264A3] flex justify-between p-4  items-center rounded-full">
      <p className=" text-white font-bold flex">
        Slack is your digital HQ.{" "}
        <span className=" font-normal mx-2">
          Meet the new features keeping teams connected in a work-from-anywhere
          world.
        </span>
        <span className=" text-white font-bold  underline-offset-2 underline flex items-center  gap-x-2">
          Let's go <FaArrowRight className=" cursor-pointer" />
        </span>
      </p>

      <IoMdClose className=" text-white text-2xl font-bold cursor-pointer" />
    </div>
  );
};

export default HeaderNotification;
