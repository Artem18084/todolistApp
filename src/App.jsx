import React from "react";
import { useState, useEffect } from "react";
import ListThemes from "./Components/listThemes/ListThemes";


import Sidebar from "./Components/Sidebar/Sidebar";

import TasksArea from "./Components/TasksArea/TasksArea";

export default function App() {
  const [contact, setContact] = useState(
    JSON.parse(localStorage.getItem("contact")) || []

  );
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(tasks));
  }, []);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const setImportant = (task) => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id
          ? {
              ...t,
              important: !t.important,
            }
          : t
      )
    );
  };

  const toggleStatus = (task) => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id
          ? {
              ...t,
              status: !t.status,
            }
          : t
      )
    );
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const [modalActive, setModalActive] = useState(false);
  const [toggleThemes, setToggleThemes] = useState(false);
  const [forest, setForest] = useState(false);
  const [sea, setSea] = useState(false);
  const [christmas, setChristmas] = useState(false);
  const [auturmn, setAuturmn] = useState(false);
  console.log("sea", sea);

  return (
    <div
      className={`lg:flex  justify-center  h-full w-full  lg:pt-[1.3rem] lg:px-[1rem] lg:pb-[.8rem] bg-hero-parent bg-no-repeat bg-cover bg-center bg-fixed 
      max-[1024px]:px-[2rem] max-[1024px]:pt-[2.3rem] max-[1024px]:pb-[1.5rem] 
      max-[640px]:p-0`}
    >
      <ListThemes
        forest={forest}
        sea={sea}
        christmas={christmas}
        auturmn={auturmn}
        setForest={setForest}
        setSea={setSea}
        setChristmas={setChristmas}
        setAuturmn={setAuturmn}
        toggleThemes={toggleThemes}
        setToggleThemes={setToggleThemes}
      />
      {/* <ModalsContact contact={contact} setContact={setContact}/> */}
      <Sidebar contact={contact}
        toggleThemes={toggleThemes}
        setToggleThemes={setToggleThemes}
        tasks={tasks}
      />

      <TasksArea contact={contact}
        forest={forest}
        sea={sea}
        christmas={christmas}
        auturmn={auturmn}
        toggleThemes={toggleThemes}
        setModalActive={setModalActive}
        modalActive={modalActive}
        tasks={tasks}
        createTask={createTask}
        setImportant={setImportant}
        toggleStatus={toggleStatus}
        removeTask={removeTask}
      />
    </div>
  );
}
