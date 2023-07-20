import React from "react";
import showSideBarIcon from "../../assets/icon-show-sidebar.svg";
import { Store } from "../../store/context/AppContext";

const NoSideBar = () => {
  const { sideBarHandleClick } = Store();

  return (
    <div
      className="absolute bottom-11 hidden h-[60px] w-[72px] items-center justify-center rounded-r-[50px] bg-[#635fc7]  md:flex"
      onClick={sideBarHandleClick}>
      <div>
        <img width="20" src={showSideBarIcon} alt="show sidebar" />
      </div>
    </div>
  );
};

export default NoSideBar;
