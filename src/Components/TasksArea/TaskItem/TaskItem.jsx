import React from "react";
import imgGarbeg from "../../../images/taskArea/garbeg/garbeg.png";
import imgPassiveStar from "../../../images/taskArea/stars/simpleStar/passiveStar.png";
import imgActiveStar from "../../../images/taskArea/stars/activeStar/activeStar.png";

import imgDate from "../../../images/sidebar/planed.png";

export default function TaskItems(props) {
  const now = new Date()
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join(".");
    
  return (
    <div
      className={`relative	 flex justify-between items-center  lg:pt-[0.75rem] lg:pr-[1.1875rem] lg:pb-[0.6875rem] lg:pl-4 not-italic  font-normal text-[1.125rem] leading-[1.375rem] bg-white rounded-[0.3125rem] [&:not(:last-child)]:mb-[0.0625rem]
      max-[1024px]:text-base  max-[1024px]:pt-2  max-[1024px]:pr-3  max-[1024px]:pb-[0.45rem]   max-[1024px]:pl-2 
      max-[768px]:text-sm max-[768px]:pt-2 max-[768px]:pr-[0.525rem] max-[768px]:pb-[0.425rem] max-[768px]:pl-2` }
    >
      <div className="flex items-center ">
        <input
          className={`cursor-pointer	 lg:mr-[1.375rem] lg:w-[1.375rem] lg:h-[1.375rem] align-middle	border-[0.0625rem] border-solid	border-black appearance-none  rounded-[50%]  ${
            props.task.status ? "bg-gray-300" : "bg-white "
          } max-[1024px]:mr-4  max-[1024px]:w-4  max-[1024px]:h-4 
          max-[768px]:mr-3  max-[768px]:w-3  max-[768px]:h-3 `}
          type="checkbox"
          onClick={() => props.toggleStatus(props.task)}
        />

        <div className="taskName">
          <div className="flex items-center ">
            <p className="flex justify-center ">
              {props.number}.{props.task.title}
            </p>
            <span className="lg:w-4 lg:h-4 lg:ml-1  max-[1024px]:w-3  max-[1024px]:h-3  max-[1024px]:ml-[0.2rem] ">
              <img
                className={`cursor-pointer `}	
                src={`${
                  !props.task.important ? imgPassiveStar : imgActiveStar
                }`}
                alt="important"
                onClick={() =>  props.setImportant(props.task)}
              
              />
            </span>
          </div>

          <p className="text-[1rem] leading-[1.25rem] max-[1024px]:text-sm">{props.task.body}</p>
          <div className="flex items-center">
            <img
              className=" lg:w-[0.65rem] lg:h-[0.65rem] lg:mr-1 max-[1024px]:w-2  max-[1024px]:h-2  max-[1024px]:mr-[0.2rem]"
              src={imgDate}
              alt="Date"
            />
            <span
              className={`text-[0.875rem] leading-[1.0625rem] max-[1024px]:text-xs ${
                props.task.date === now
                  ? "text-teal-300"
                  : !props.task.status && new Date(props.task.date.split(".").reverse().join("-")).getTime() < new Date(now.split(".").reverse().join("-")).getTime()
                  ? "line-through text-gray-400"
                  : "text-gray-400"
              }
                
              `}
            >
              {props.task.date === now ? "Today" : props.task.date}
            </span>
          </div>
        </div>
      </div>
      <div>
        <img
          onClick={() => props.remove(props.task)}
          className="cursor-pointer	 lg:w-[1.25rem] lg:h-[1.25rem] max-[1024px]:w-4  max-[1024px]:h-4  max-[768px]:w-3  max-[768px]:h-3 "
          src={imgGarbeg}
          alt="delete"
        />
        <span className="passiveStar lg:h-[1.25rem] lg:w-[1.25rem] bg-passive-star bg-no-repeat bg-cover max-[1024px]:w-3  max-[1024px]:h-3    "></span>
      </div>
    </div>
  );
}
