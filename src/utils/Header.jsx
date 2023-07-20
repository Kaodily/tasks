import React from "react";
import { useParams } from "react-router-dom";
import { AiOutlineMore } from "react-icons/ai";
import { Store } from "../store/context/AppContext";
import { Button } from "../styles/Button";
import logo from "../assets/logo-mobile.svg";
import chevronDown from "../assets/icon-chevron-down.svg";
import addTask from "../assets/icon-add-task-mobile.svg";
import logodark from "../assets/logo-dark.svg";
import logolight from "../assets/logo-light.svg";

const Header = () => {
  const { id } = useParams();
  const { theme } = Store();
  return (
    <header className="header sticky top-0">
      {/* Header Mobile */}
      <div className="  h-16 flex items-center justify-between px-5 shadow-md md:hidden ">
        <div>
          <img src={logo} alt="company logo" />
        </div>
        <div className="flex items-center">
          <p className="text-[16px] mr-3">Platform Launch</p>
          <div>
            <img src={chevronDown} alt="chevron up" />
          </div>
        </div>
        <div className="flex items-center">
          <button className="w-[55px] h-[38px] rounded-3xl bg-[#625fc7]  flex justify-center border-none items-center mr-[5px]">
            <img src={addTask} alt="add" />
          </button>
          <div className="mt-2">
            <AiOutlineMore color={theme ? "black" : " white"} fontSize="28px" />
          </div>
        </div>
      </div>
      {/* Header desktop */}
      <div className="hidden h-16 md:flex items-center shadow-md justify-between px-5 ">
        <div>
          <img
            className="logo"
            src={theme ? logodark : logolight}
            alt="company logo"
          />
        </div>
        <p className="text-[20px] font-bold mr-2">
          {id?.replace("-", " ") ?? "Platform Launch"}
        </p>
        <div className="flex items-center">
          <Button className="add_task">+ Add New Task</Button>
          <div className="more ">
            <AiOutlineMore color={theme ? "black" : " white"} fontSize="28px" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
