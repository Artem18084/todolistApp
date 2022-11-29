import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import imgBurger from "../../../../images/sidebar/burger.png"

export default function SidebarItem(props) {
  const [isHere, setIsHere] = useState(false)

   return (
    <Link
    
  onFocus={(e)=> setIsHere(true)}
  onBlur={(e)=> setIsHere(false)}
      to={props.path}
      className={`flex justify-between whitespace-nowrap lg:mb-[0.6875rem]  max-[1024px]:text-sm ${props.classNameMargine} ${isHere?" font-bold rounded-[0.3125rem] " : ""} `}
    >
      <div  className="flex cursor-pointer items-center">
       
        <img
          className=" max-[1024px]:hidden w-[1.0625rem] h-[1.0625rem] mr-[1.3125rem] "
          src={props.img}
          alt={props.name}
        />
        <span>{props.name}</span>
      </div>
<div className=" max-[768px]:flex ">
   <span className="text-[#676464] max-[1024px]:ml-1">{props.count}</span>
      <img   onClick={()=>props.setBurgerActive(false)} src={imgBurger} alt="burger" className={`md:hidden w-4 h-4 ${props.classNameHidden}` }/>
</div>
     
    </Link>
  );
}
