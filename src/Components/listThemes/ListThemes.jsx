import React from "react";
import ItemThemes from "./itemsThemes/ItemThemes";
import imgThemes from "../../images/sidebar/themes.png";

export default function ListThemes(props) {
  const forestActive =  ()=> {
    props.setForest(true)
    props.setSea(false)
    props.setAuturmn(false)
    props.setChristmas(false)
  }
  const seaActive =  ()=> {
    props.setForest(false)
    props.setSea(true)
    props.setAuturmn(false)
    props.setChristmas(false)
  }
  const christmasActive =  ()=> {
    props.setForest(false)
    props.setSea(false)
    props.setAuturmn(false)
    props.setChristmas(true)
  }
  const auturmnActive =  ()=> {
    props.setForest(false)
    props.setSea(false)
    props.setAuturmn(true)
    props.setChristmas(false)
  }
  return (
    <div
      className={`flex lg:w-[10%]    lg:flex-col-reverse lg:justify-end  lg:pt-[1.875rem]  bg-gray-200 lg:pr-[1.75rem] lg:pl-[1.75%]  border-solid lg:border-y-[0.031rem] 
    lg:border-l-[0.03125rem] border-white lg:rounded-l-[1.25rem] lg:text-base
    
   
     max-[1024px]:h-[12.5%] max-[1024px]:py-4  max-[1024px]:px-4 max-[1024px]:border-t-[0.03125rem] max-[1024px]:border-x-[0.03125rem] max-[1024px]:rounded-t-[1.125rem] max-[1024px]:justify-between
     max-[1024px]:text-sm ' 

     max-[640px]:rounded-none ${!props.toggleThemes ? "hidden" : ""}  `}
    >
      <div className={`max-[1024px]:flex `}>
        <ItemThemes setThemes={forestActive} themes={props.forest}name="Forest" />
        <ItemThemes setThemes={seaActive} themes={props.sea}  name=" Sea" />
        <ItemThemes setThemes={christmasActive} themes={props.christmas} name=" Christmas" />
        <ItemThemes setThemes={auturmnActive} themes={props.auturmn} name=" Autumn" />





        
      </div>
      <img
        src={imgThemes}
        alt="themesToggle"
        className=" w-8 h-8 cursor-pointer "
        onClick={() => props.setToggleThemes(false)}
      />
    </div>
  );
}
