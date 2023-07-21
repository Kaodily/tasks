import React from "react";
import { useParams } from "react-router-dom";
import { AiOutlineMore } from "react-icons/ai";
import {  Store } from "../store/context/AppContext";
import { Button } from "../styles/Button";
import logo from "../assets/logo-mobile.svg";
import chevronDown from "../assets/icon-chevron-down.svg";
import addTask from "../assets/icon-add-task-mobile.svg";
import logodark from "../assets/logo-dark.svg";
import logolight from "../assets/logo-light.svg";

const Header = () => {
  const { id } = useParams();
  const { theme , openModal } =  Store();
  return (
    <header className="header sticky top-0">
      {/* Header Mobile */}
      <div className="  flex h-16 items-center justify-between px-5 shadow-md md:hidden ">
        <div>
          <img src={logo} alt="company logo" />
        </div>
        <div className="flex items-center">
          <p className="mr-3 text-[16px] font-bold">Platform Launch</p>
          <div>
            <img src={chevronDown} alt="chevron up" />
          </div>
        </div>
        <div className="flex items-center">
          <button className="mr-[5px] flex h-[38px] w-[55px]  items-center justify-center rounded-3xl border-none bg-[#625fc7]">
            <img src={addTask} alt="add" />
          </button>
          <div className="mt-2">
            <AiOutlineMore color={theme ? "black" : " white"} fontSize="28px" />
          </div>
        </div>
      </div>
      {/* Header desktop */}
      <div className="hidden h-16 items-center justify-between px-5 shadow-md md:flex ">
        <div className="flex">
          <img
            className="logo object-none"
            src={theme ? logodark : logolight}
            alt="company logo"
          />
          <p className="ml-44 mr-2 text-[20px] font-bold">
            {id?.replace("-", " ") ?? "Platform Launch"}
          </p>
        </div>

        <div className="flex items-center ">
          <Button className="add_task">+ Add New Task</Button>
          <p  className="more ">
            <AiOutlineMore data-modal="more" onClick={openModal}  color={theme ? "black" : " white"} fontSize="28px" />
          </p>
        </div>

      </div>
    </header>
  );
};

export default Header;
