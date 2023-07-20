import React, { createContext, useContext, useReducer } from "react";
import { default as reducer } from "../reducer/AppReducer";
import datas from "../../../data.json";
export const Context = createContext();

const initialState = {
  data: datas,
  isSidebar: true,
  theme: true,
};
const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sideBarHandleClick = () => {
    dispatch({ type: "Sidebar" });
  };
  const themeHandleClick = () => {
    dispatch({ type: "Theme" });
  };
  return (
    <Context.Provider
      value={{ ...state, sideBarHandleClick, themeHandleClick }}>
      {children}
    </Context.Provider>
  );
};
export const Store = () => useContext(Context);

export default AppContext;
