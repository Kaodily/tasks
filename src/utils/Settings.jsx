import React from "react";
import { Store } from "../store/context/AppContext";
import lightIcon from "../assets/icon-light-theme.svg";
import darkIcon from "../assets/icon-dark-theme.svg";
import hideSide from "../assets/icon-hide-sidebar.svg";

const Settings = () => {
  const { sideBarHandleClick, themeHandleClick } = Store();

  return (
    <div className="absolute bottom-[70px] left-5">
      <div
        className="mode w-[250px] h-9 p-6 flex items-center justify-around rounded-md"
        onClick={themeHandleClick}>
        <div>
          <img src={lightIcon} alt="light mode" />
        </div>
        <div className="w-12 h-6 rounded-[12px] relative bg-[#635fc7] flex items-center">
          <div className="circle_theme absolute top-1 w-[15px] h-[15px] rounded-full transition bg-white "></div>
        </div>
        <div>
          <img src={darkIcon} alt="darkmode" />
        </div>
      </div>
      <div className="flex items-center mt-8 ml-3" onClick={sideBarHandleClick}>
        <div>
          <img src={hideSide} alt="hide sidebar" />
        </div>
        <p className="ml-2 text-sm">Hide Sidebar</p>
      </div>
    </div>
  );
};

export default Settings;
