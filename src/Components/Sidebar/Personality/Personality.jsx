import React from "react";
import imgThemes from "../../../images/sidebar/themes.png";

export default function Personality(props) {
  const name = {firstName:"Andriy", lastName:"Yablonskii",}
  return (
    <div className="flex not-italic font-normal items-center  mb-[2.6875rem]  ">
      <span className="   w-10 h-10 bg-[#CD99BE] text-black text-[1.125rem] leading-[1.375rem] rounded-[50%]  px-[0.5rem] py-[0.5625rem]">
        <p className="m-auto">{name.firstName.charAt(0) +  name.lastName.charAt(0)}</p>
      </span>
      <div className="flex flex-col  ml-[0.625rem]">
        <span className="font-medium lg:text-[1.1875rem] lg:leading-[1.4375rem] text-black max-[1024px]:text-sm	">
          {name.firstName + " " + name.lastName}
        </span>
        {/* <a
          className="  lg:text-[0.875rem] lg:leading-[1.0625rem]	 underline text-[#5d5d62] max-[1024px]:text-xs"
          href="mailto:artemkosharnyi@gmail.com"
        >
          artemko@gmail.com
        </a> */}
      </div>
      {/* <figure  className="bg-gray-300 flex flex-col items-center ml-2 rounded-[.3125rem]"> */}
          <img
        onClick={() => props.setToggleThemes(true)}
        src={imgThemes}
        alt="themes"
        className="w-8 h-8 cursor-pointer    "
      />
      {/* <figcaption className="text-xs" >style</figcaption> */}
      
    
    </div>
  );
}
