import React, { useEffect, useState } from "react";
import Buynow from "./Buynow";

function Hero() {

  return (
    <div className="relative cursor-pointer flex justify-center overflow-hidden">
      {/* Desktop Image */}
      <img className="hidden sm:block transition-all duration-300 ease-out w-screen"
        src='https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/Home_Hero_KV-1-v2.jpg?$1920_N_JPG$?imwidth=1366'
        alt="hero"/>

      {/* Mobile Image */}
      <img
        className="sm:hidden w-full transition-all duration-300 ease-out"
        src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/Home_Hero_KV.jpg?$720_N_JPG$?imwidth=720"
        alt="mobile hero"
      />
        {/* Hero Images buttons */}
      <div className=" absolute  top-[50%] w-[720px] pt-[52px] pb-[60px] transition-all mt-[53px] text-white left-[51%] ml-[-720px] pl-[60px] translate-y-[-50%] leading-1.15">
            <h1 className="text-[60px] font-bold leading-1.2 ">
              <span className="block ">Fab Grab Fest</span>
              <span className="hidden">Fab Grab Fest</span>
            </h1>
            <p className=" text-[32px] leading-1.2">
              <span>Get the latest AI tech</span>
              <span className="hidden">Get the latest AI tech</span>
            </p>
            <div className="ml-[25px] mt-4  ">
            <Buynow  name="Buy"/>
            </div>  
      </div>
    </div>
  );
}

export default Hero;
