import React from 'react'
import imgStarActive from "../../../../images/taskArea/stars/activeStar/activeStar.png"
export default function DefaultTask() {
  return (
    <div className={`flex items-center bg-white py-3 pl-4 rounded-[0.3125rem] not-italic font-normal text-[1.125rem] leading-[1.375rem] `}>
    <input  checked={false} type="checkbox" className="cursor-pointer	 mr-[1.375rem] w-[1.375rem] h-[1.375rem] align-middle	border-[0.0625rem] border-solid	border-black appearance-none  rounded-[50%]" />
    <div className="flex flex-col">
      <div className=" flex  items-center">
        <h2 >1.You can write tasks</h2>
        <img src={imgStarActive} alt="star" className="w-4 h-4 ml-1"/>
      </div>
      <h3 className="text-[1rem] leading-[1.25rem]">You have to explain it</h3>
      <div>
        <h4 className="text-gray-400 leading-[1.0625rem] text-[0.875rem]">You have to add the expiry date</h4>
      </div>
    </div>
  </div>
  )
}
