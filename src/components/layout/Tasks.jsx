import React from "react";
import { Store } from "../../store/context/AppContext";
import TaskComponent from "./TaskComponent";

const Tasks = () => {
  const { data, tasks } = Store();
  let task = "";
  for (let item in tasks) {
    if (tasks[item]) {
      task = item;
    }
  }


  const filtered = data?.filter((item) => item.name === task);

  return (
    <div className=" overflow-auto pr-5">
      {filtered?.map((item, index) => {
        return <TaskComponent key={index} column={item.columns} />;
      })}
    </div>
  );
};

export default Tasks;
