import React from "react";
import Modal from "./Modal";
import MoreModal from "./MoreModal";
import {  Store } from "../../store/context/AppContext";

const ModalTwo = ({ closeFn, open }) => {
  return (
    <>
      <Modal open={open}>
        <p>Hi</p>
        <p onClick={closeFn}>close</p>
      </Modal>
    </>
  );
};
const ModalThree = ({ closeFn, open }) => {
  return (
    <>
      <Modal open={open}>
        <div className="fixed top-5 z-10 h-24 w-44 bg-slate-800 text-white ">
          <p>Hey</p>
          <p onClick={closeFn}>close</p>
        </div>
      </Modal>
    </>
  );
};
const ModalManager = () => {
  const { modal } = Store();
  return (
    <>
      <MoreModal open={modal === "more"} />
      <ModalTwo open={modal === "two"} />
      <ModalThree open={modal === "three"} />
    </>
  );
};

export default ModalManager;
