import React from "react";

import TaskItem from "../TaskItem/TaskItem.jsx";
import "../../../index.css";

export default function TaskList({
 
  tasks,
  remove,
  create,
  toggleStatus,
  setImportant,
}) {
  return (
    <div
      className={`  flex flex-col ${
        tasks.length > 3
          ? "  scrollbar-thin   scrollbar-thumb-gray-100  lg:max-h-[15.5rem] max-[1024px]:max-h-[14rem] max-[768px]:max-h-full  max-[1024px]:scrollbar-thumb-transparent"
          : "" 
      } `}
    >
      {tasks.map((task, index) => (
        <TaskItem
          setImportant={setImportant}
          toggleStatus={toggleStatus}
          create={create}
          remove={remove}
          number={index + 1}
          task={task}
          key={task.id}
          tasks={tasks}
        />
      ))}
    </div>
  );
}
