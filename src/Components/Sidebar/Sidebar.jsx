import React from "react";
import Personality from "./Personality/Personality";
import SwichPoints from "./SwichPoints/SwichPoints";
import { useState } from "react";

export default function Sidebar(props) {
  const [burgerActive, setBurgerActive] = useState(false)
  return (
    <div
      className={` ${props.toggleThemes ? " hidden" : " flex"}
       lg:w-[20%]   lg:flex-col  lg:pt-[3.875rem]  bg-gray-200 lg:pr-[1.75rem] lg:pl-[1.75%]  border-solid lg:border-y-[0.031rem] 
       lg:border-l-[0.03125rem] border-white lg:rounded-l-[1.25rem] lg:text-base
       
      
        max-[1024px]:h-[12.5%] max-[1024px]:py-4  max-[1024px]:px-4 max-[1024px]:border-t-[0.03125rem] max-[1024px]:border-x-[0.03125rem] max-[1024px]:rounded-t-[1.125rem] max-[1024px]:justify-between
        max-[1024px]:text-sm 
        max-[640px]:rounded-none
        `}
    >

      <Personality setToggleThemes={props.setToggleThemes}  toggleThemes={props.toggleThemes}/>
      <SwichPoints tasks={props.tasks} burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>
      
    </div>
  );
}
