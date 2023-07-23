import React from "react";
import Modal from "./Modal";
import { Store } from "../../store/context/AppContext";

const MoreModal = ({ open }) => {
  const { closeModal, openModal } = Store();
  // let task = "";
  // for (let item in tasks) {
  //   if (tasks[item]) {
  //     task = item;
  //   }
  // }

  return (
    <Modal open={open}>
      <div
        onClick={closeModal}
        className="fixed bottom-0 left-0 right-0 top-0 bg-[rgb(0,0,0,0.7)] "
      />
      <div
        className="more_modal fixed right-6 top-14 h-20
           w-40 rounded-lg p-3 shadow-md">
        <p className="my-3 mt-2 text-xs font-bold tracking-widest text-[#828fa3]  hover:text-red-900">
          Edit Board
        </p>
        <p
          onClick={openModal}
          data-modal="delete"
          className="mt-2 text-xs font-bold tracking-widest text-[#828fa3]  hover:text-red-900">
          Delete Board
        </p>
      </div>
    </Modal>
  );
};

export default MoreModal;
