import React, { useState } from "react";
import MyButton from "../../UI/Button/MyButton";
import MyInput from "../../UI/Input/MyInput";
import imgCancel from "../../../images/taskArea/modal/cancel.png"

export default function FormaTasks({ create, setModalActive}) {
  const [task, setTask] = useState({
    title: "",
    body: "",
    date: "",
    status: false,
    important: false,
    expired: false,
  });

  const addNewTask = (e) => {
    if (task.title && task.body && task.date) {
      e.preventDefault();

      const newTask = {
        ...task,
        date: task.date.split("-").reverse().join("."),
        id: Date.now(),
        status: false,
        important: false,
        expired: false,
      };

      create(newTask);

      setTask({
        id: "",
        title: "",
        body: "",
        date: "",
        status: false,
        important: false,
      });
    } else {
      // change
      alert("put data down");
    }
  };

  return (
    <form
      addNewTask={addNewTask}
      className="flex flex-col w-full relative   justify-between items-center whitespace-nowrap text-black"
    >
      
      
      <div className="flex flex-col w-full justify-around">
      <h3 className="   mx-auto mb-4">New  Task</h3>
        <MyInput
          type="text"
          placeholder="Tittle"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Description"
          value={task.body}
          onChange={(e) => setTask({ ...task, body: e.target.value })}
        />
        <MyInput
          className=" relative p-[0.9375rem]  h-full  bg-black bg-opacity-0 w-[33.3333333333333333333333333333333%] outline-none placeholder-white placeholder-opacity-[0.2]"
          type="text"
          onFocus={(e) => ((e.currentTarget.type = "date"), e.showPickers())}
          onBlur={(e) => (e.currentTarget.type = "text")}
          placeholder="Date"
          value={task.date}
          onChange={(e) =>
            setTask({
              ...task,
              date: e.target.value,
            })
          }
        />
      </div>
      <MyButton onClick={addNewTask}>Add</MyButton>
      <img onClick={()=> setModalActive(false)} src={imgCancel} className = "absolute top-[-.5rem] right-[-0.5em] w-5 h-5 cursor-pointer"/>
    </form>
  );
}
