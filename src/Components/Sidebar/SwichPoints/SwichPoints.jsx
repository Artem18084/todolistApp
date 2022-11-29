import React from "react";
import imgAll from "../../../images/sidebar/all.png";
import imgComplete from "../../../images/sidebar/complete.png";
import imgImportant from "../../../images/sidebar/important.png";
import imgOverDue from "../../../images/sidebar/overDue.png";
import imgMyDay from "../../../images/sidebar/planed.png";
import imgBurger from "../../../images/sidebar/burger.png";
import SidebarItem from "./SidebarItem/SidebarItem";

export default function SwichPoints({ tasks, setBurgerActive, burgerActive }) {
  const allCount = tasks.length > 0 ? tasks.length : 0;

  const filteredCompletedTasks = tasks.filter((t) => t.status).length;
  const completedCount =
    filteredCompletedTasks > 0 ? filteredCompletedTasks : 0;

  const filteredExpiredTasks = tasks
    .filter((t) => !t.status)
    .filter(
      (t) =>
        t.date <
        new Date().toISOString().split("T")[0].split("-").reverse().join(".")
    ).length;
  const expiredCount = filteredExpiredTasks > 0 ? filteredExpiredTasks : 0;

  const filteredMyDay = tasks.filter(
    (t) =>
      t.date ===
      new Date().toISOString().split("T")[0].split("-").reverse().join(".")
  ).length;
  const myDayCount = filteredMyDay > 0 ? filteredMyDay : 0;

  const filteredImportantTasks = tasks.filter((t) => t.important).length;
  const importantCount =
    filteredImportantTasks > 0 ? filteredImportantTasks : 0;

  return (
    <div className=" relative ">
      <div
        className={` md:flex  lg:flex-col   not-italic font-normal	text-[1.125rem] leading-[1.375rem]
     
     ${
       burgerActive
         ? "  max-[768px]:absolute top-[-.6rem] right-[-.5rem] bg-gray-200 p-2 rounded-[.3125rem] "
         : " max-[768px]:hidden"
     }`}
      >
        <SidebarItem
          setBurgerActive={setBurgerActive}
          count={allCount}
          img={imgAll}
          name={"All"}
          path={"/"}
        />

        <SidebarItem
          classNameHidden="hidden"
          classNameMargine=" max-[1024px]:mr-4 "
          setBurgerActive={setBurgerActive}
          count={completedCount}
          img={imgComplete}
          name={"Completed"}
          path={"/completedTasks"}
        />

        <SidebarItem
          classNameHidden="hidden"
          classNameMargine=" max-[1024px]:mr-4 "
          setBurgerActive={setBurgerActive}
          count={myDayCount}
          img={imgMyDay}
          name={"My Day"}
          path={"/MyDay"}
        />

        <SidebarItem
          classNameHidden="hidden"
          classNameMargine=" max-[1024px]:mr-4 "
          setBurgerActive={setBurgerActive}
          count={importantCount}
          img={imgImportant}
          name={"Important"}
          path={"/ImportantTasks"}
        />

        <SidebarItem
          classNameHidden="hidden"
          classNameMargine=" max-[1024px]:mr-4 "
          setBurgerActive={setBurgerActive}
          count={expiredCount}
          img={imgOverDue}
          name={"Expired"}
          path={"/ExpiredTasks"}
        />
      </div>
      <img
        onClick={() => setBurgerActive(true)}
        src={imgBurger}
        alt="burgerIn"
        className={`h-5 w-5 md:hidden ${burgerActive ? "hidden" : ""}`}
      />
    </div>
  );
}
