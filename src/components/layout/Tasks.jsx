import React from "react";
import { useLocation } from "react-router-dom";
import {  Store } from "../../store/context/AppContext";
import TaskComponent from "./TaskComponent";

const Tasks = () => {
  const { data } = Store();
  
  const location = useLocation();
  const filtered = data?.filter((item) => {
    return location.pathname === "/"
      ? item.name === "Platform Launch"
      : location.pathname === "/Roadmap"
      ? item.name === "Roadmap"
      : item.name === "Marketing Plan";
  });
  return (
    <div className=" overflow-auto pr-5">
      {filtered?.map((item, index) => {
        return <TaskComponent key={index} column={item.columns} />;
      })}
    
    </div>
  );
};

export default Tasks;
