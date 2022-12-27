import { Route, Routes } from "react-router-dom";

import TaskList from "./TaskList/TaskList";
import ModalTasks from "./ModalTasks/ModalTasks";
import DefaultTask from "./TaskList/DefaultTask/DefaultTask";
import DefaultTaskToggle from "./TaskList/DefaultTask/DefaultTaskToggle";

export default function TasksArea({
  auturmn,
  christmas,
  sea,
  forest,
  toggleThemes,
  tasks,
  setModalActive,
  modalActive,
  createTask,
  setImportant,
  toggleStatus,
  removeTask,
}) {
  const filteredAccordingToStatus = tasks.filter((t) => t.status);
  const filteredAccordingToImportant = tasks.filter((t) => t.important);
  const filteredAccordingToDate = tasks.filter(
    (t) =>
      t.date ===
      new Date().toISOString().split("T")[0].split("-").reverse().join(".")
      
  );
  const filteredAccordingToExpired = tasks
    .filter((t) => !t.status)
    .filter(
      (t) =>
      new Date(
        t.date.split(".").reverse().join("-")).getTime() <
        new Date().getTime()
    );

    // mast write function
    
  return (
    <div className={` ${toggleThemes? " lg:w-[90%]" : "lg:w-[80%]"}   flex md:flex-col md:justify-between  lg:pt-[3.75rem] lg:px-[1.0625rem] lg:pb-[1.875rem] lg:pl-[1.125rem] ${forest ?"bg-springForest": christmas ? " bg-christmas": auturmn ? " bg-auturmn": "bg-sea"}   bg-no-repeat bg-cover bg-center  bg-fixed border-solid lg:border-r-[0.03125rem] lg:border-y-[0.03125rem] border-white lg:rounded-r-[1.25rem]
    max-[1024px]:h-[87.5%] max-[1024px]:py-[1.5rem] max-[1024px]:px-[1rem] max-[1024px]:border-x-[0.03125rem] max-[1024px]:border-b-[0.03125rem] max-[1024px]:rounded-b-[1.25rem]  max-[768px]:flex-col-reverse max-[768px]:justify-end 
    max-[768px]:px-[0-8rem] max-[768px]:py-[0.75rem] max-[640px]:h-screen  max-[640px]:rounded-none`}>
      <div className="flex flex-col  overflow-y-hidden">
        <h1 className=" lg:mb-[1.75rem] font-bold not-italic	lg:text-[2.1875rem] lg:leading-[2.625rem] text-white
        max-[1024px]:mb-[1rem] max-[1024px]:text-[1.5625rem] max-[1024px]:leading-[2.3125rem] 
        max-[768px]:text-lg max-[768px]:my-1
       
         ">
          You Can Do More...
        </h1>

        <Routes>
          <Route
            path="/"
            element={
              tasks.length !== 0 ? (
                <TaskList
                  setImportant={setImportant}
                  toggleStatus={toggleStatus}
                  create={createTask}
                  remove={removeTask}
                  tasks={tasks}
                />
              ) : (
                <DefaultTask />
              )
            }
          />
          <Route
            path="/CompletedTasks"
            element={
              filteredAccordingToStatus.length > 0 ? (
                <TaskList
                  setImportant={setImportant}
                  toggleStatus={toggleStatus}
                  create={createTask}
                  remove={removeTask}
                  tasks={filteredAccordingToStatus}
                />
              ) : (
                <DefaultTaskToggle
                  typeTasks={"completed"}
                  additionalWord={""}
                  emotion={" - You can do much better!"}
                />
              )
            }
          />
          <Route
            path="/ImportantTasks"
            element={
              filteredAccordingToImportant.length > 0 ? (
                <TaskList
                  setImportant={setImportant}
                  toggleStatus={toggleStatus}
                  create={createTask}
                  remove={removeTask}
                  tasks={filteredAccordingToImportant}
                />
              ) : (
                <DefaultTaskToggle
                  typeTasks={"important"}
                  additionalWord={""}
                  emotion={" - You might be more ambitious!"}
                />
              )
            }
          />{" "}
          <Route
            path="/MyDay"
            element={
              filteredAccordingToDate.length > 0 ? (
                <TaskList
                  setImportant={setImportant}
                  toggleStatus={toggleStatus}
                  create={createTask}
                  remove={removeTask}
                  tasks={filteredAccordingToDate}
                />
              ) : (
                <DefaultTaskToggle
                  typeTasks={""}
                  additionalWord={"for today"}
                  emotion={" - You can rest!"}
                />
              )
            }
          />
          <Route
            path="/ExpiredTasks"
            element={
              filteredAccordingToExpired.length > 0 ? (
                <TaskList
                  setImportant={setImportant}
                  toggleStatus={toggleStatus}
                  create={createTask}
                  remove={removeTask}
                  tasks={filteredAccordingToExpired}
                />
              ) : (
                <DefaultTaskToggle
                  typeTasks={"expired"}
                  additionalWord={""}
                  emotion={" - WELL DONE"}
                />
              )
            }
          />
        </Routes>
      </div>

      <div
        onClick={() => setModalActive(true)}
        className={` w-full lg:p-5 bg-formColor lg:text-lg  cursor-pointer rounded-[0.3125rem] text-white ${
          modalActive ? " pointer-events-none " : "pointer-events-auto"
        }  max-[1024px]:p-4 max-[768px]:p-2`}
      >
        <span className="lg:mr-2  max-[1024px]:mr-1 max-[768px]:mr-[0.1rem]   max-[768px]:text-sm">+</span>
        <span className="">Add a Task</span>
      </div>

      <div
        onClick={() => setModalActive(false)}
        className={`absolute bottom-0 top-0 right-0 left-0 w-screen h-screen bg-black opacity-[0.75] ${
          !modalActive ? "scale-0" : " scale-100"
        }`}
      ></div>

      <div
        className={`absolute flex items-between justify-center bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]  pt-4 px-4 w-[35%] h-[40%] bg-slate-300  rounded-[1rem] ${
          !modalActive ? "scale-0" : "scale-100"
        }
          }`}
      >
        <ModalTasks setModalActive={setModalActive} create={createTask} />
      </div>
    </div>
  );
}
