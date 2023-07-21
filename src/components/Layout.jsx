import React from "react";
import {  Store } from "../store/context/AppContext";
import SideBar from "./layout/SideBar";
import NoSideBar from "./layout/NoSideBar";
import Tasks from "./layout/Tasks";

const Layout = () => {
  const { isSidebar } = Store();
  const ShowSideBar = isSidebar ? <SideBar /> : <NoSideBar />;

  return (
    <section className="">
      <div>{ShowSideBar}</div>
      <div className={`${isSidebar ? "md:grid grid-cols-2" : null}`}>
        <div className={`${isSidebar ? 'flex w-[280px]' : 'hidden'}`}></div>
        <Tasks />
      </div>
    </section>
  );
};

export default Layout;
