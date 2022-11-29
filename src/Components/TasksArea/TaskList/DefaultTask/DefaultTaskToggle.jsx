import React from "react";

export default function DefaultTaskToggle(props) {
  return (
    <div
      className={`flex items-center bg-white py-8 pl-6 rounded-[0.3125rem] not-italic font-normal text-[1.125rem] leading-[1.375rem] `}
    >
      <h2>
        You don't have {props.typeTasks} tasks {props.additionalWord} yet{" "}
        {props.emotion}
      </h2>
    </div>
  );
}
