import React from "react";

export default function ModalsContact(props) {
  return (
    <div className="w-screen h-screen bg-formColor absolute top-0 right-0">
      <section>
        <form action="">
          <input type="text" placeholder="first/last name" /> <input type="text" placeholder="gmail" /> <button onClick={()=>props.setContact(!props.contact)}>Add</button>
        </form>
      </section>
    </div>
  );
}
