import React from "react";
import { useState } from "react";
import ListThemes from "./Components/listThemes/ListThemes";

import Sidebar from "./Components/Sidebar/Sidebar";

import TasksArea from "./Components/TasksArea/TasksArea";

export default function App() {
  const firstTaskDate = new Date("2022-11-25")
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join(".");
  const secondTaskDate = new Date("2022-11-21")
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join(".");
  const thirdTaskDate = new Date("2022-11-22")
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join(".");
  const fourthTaskDate = new Date("2022-11-23")
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join(".");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Have created the To Do List",
      body: "According to the layout",
      date: firstTaskDate,
      status: false,
      important: true,
      Expired: false,
    },
    {
      id: 2,
      title: "styled",
      body: "According to the sidebar's items",
      date: secondTaskDate,
      status: true,
      important: true,
      Expired: false,
    },
    {
      id: 3,
      title: "Have done responsive",
      body: "by phones & tablet",
      date: thirdTaskDate,
      status: true,
      important: true,
      Expired: false,
    },
    {
      id: 4,
      title: "Toggle date's status",
      body: "remove from expired if is done",
      date: secondTaskDate,
      status: true,
      important: false,
      Expired: false,
    },
    {
      id: 5,
      title: "Set Mail To",
      body: "Route",
      date: thirdTaskDate,
      status: false,
      important: false,
      Expired: false,
    },
    {
      id: 6,
      title: "Create component",
      body: "Sidebar's items",
      date: fourthTaskDate,
      status: true,
      important: false,
      Expired: false,
    },
    {
      id: 7,
      title: "Styled modal",
      body: " customized",
      date: fourthTaskDate,
      status: true,
      important: false,
      Expired: false,
    },
  ]);

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
      className={`lg:flex  justify-center  h-full w-full  lg:pt-[3rem] lg:px-[2.8125rem] lg:pb-[1.9375rem] bg-hero-parent bg-no-repeat bg-cover bg-center bg-fixed 
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
      <Sidebar
        toggleThemes={toggleThemes}
        setToggleThemes={setToggleThemes}
        tasks={tasks}
      />

      <TasksArea
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
