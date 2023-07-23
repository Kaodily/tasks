import React from "react";
import { Store } from "../../store/context/AppContext";
import Modal from "./Modal";
import NavLinks from "../NavLinks";
import lightIcon from "../../assets/icon-light-theme.svg";
import darkIcon from "../../assets/icon-dark-theme.svg";

const MobileNavModal = ({ open }) => {
  const { closeModal, themeHandleClick } = Store();

  return (
    <Modal open={open}>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 bg-[rgb(0,0,0,0.7)] "
        onClick={closeModal}
      />
      <div className="mobile_modal fixed left-2/4 top-20 h-[380px] w-80 translate-x-[-50%] rounded-md  bg-white  md:block ">
        <NavLinks marginTop={"my-7"} />
        <div className="mt-5 flex items-center px-8">
          <div>
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                fill="#635fc7"
              />
            </svg>
          </div>
          <p className="text-4 ml-3 font-semibold tracking-widest text-[#635fc7]">
            + Create New Board
          </p>
        </div>
        <div
          className="mode ml-8 mt-8 flex h-9 w-[250px] items-center justify-around rounded-md p-6"
          onClick={themeHandleClick}>
          <div>
            <img src={lightIcon} alt="light mode" />
          </div>
          <div className="relative flex h-6 w-12 items-center rounded-[12px] bg-[#635fc7]">
            <div className="circle_theme absolute top-1 h-[15px] w-[15px] rounded-full bg-white transition "></div>
          </div>
          <div>
            <img src={darkIcon} alt="darkmode" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MobileNavModal;
