import React from 'react'


export default function MyInput(props) {
  return (
    <input {...props} className=' relative rounded-[0.3125rem]  px-[0.9375rem]  py-3 [&:not(:last-child)]:mb-4  font-bold h-[5vh]  bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 focus:from-cyan-500 focus:purple-400 focus:to-pink-500 bg-opacity-1 w-full outline-none placeholder-black placeholder-opacity-[0.2] text-base italic  border-solid border  border-black' />
  )
}
