import React from 'react'


export default function MyInput(props) {
  return (
    <input {...props} className=' relative rounded-[0.3125rem]  px-[0.9375rem]  py-3 [&:not(:last-child)]:mb-4   h-[5vh]  bg-cyan-100 bg-opacity-1 w-full outline-none placeholder-black placeholder-opacity-[0.2] text-base italic font-normal border-solid border  border-black' />
  )
}
