import React, { createContext, useContext, useReducer, useState } from "react";
import { default as reducer } from "../reducer/AppReducer";
import datas from "../../../data.json";
export const Context = createContext();

const initialState = {
  isSidebar: true,
  theme: true,
  modal: false,
};
const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState(datas)

  const sideBarHandleClick = () => {
    dispatch({ type: "Sidebar" });
  };
  const themeHandleClick = () => {
    dispatch({ type: "Theme" });
  };
  const openModal = (e) => {
    dispatch({ type: "openModal", payload: { e } });
  };
  const closeModal = () => {
    dispatch({ type: "closeModal" });
  };
  const DeleteBoard = (id) => {
    const filtered = data?.boards?.filter((item) => {
          return id === "/"
            ? item.name !== "Platform Launch"
            : id  !== "/Roadmap"
            ? item.name !== "Roadmap"
            : item.name !== "Marketing Plan";
        })
        console.log(filtered)
   setData(filtered)
  };

  return (
    <Context.Provider
      value={{
        ...state,
        data,
        sideBarHandleClick,
        themeHandleClick,
        openModal,
        closeModal,
        DeleteBoard
      }}>
      {children}
    </Context.Provider>
  );
};
export const Store = () => useContext(Context);

export default AppContext;
