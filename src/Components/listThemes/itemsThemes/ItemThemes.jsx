import React from 'react'



export default function ItemThemes(props) {
  
  return (
    <button
   onClick={()=> props.setThemes()}
      className={` max-[1024px]:[&:not(:first-child)]:pl-4 cursor-pointer block  ${props.themes?"font-bold": ""}`}>
        {props.name}
    </button>
  )
}
