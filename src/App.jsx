import React from "react";
import "./App.css";
// import Home from "./pages/Home";
import { Store } from "./store/context/AppContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Themes } from "./theme";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Task from "./components/dashboard/platform";

function App() {
  const { theme } = Store();
  return (
    <>
      <ThemeProvider theme={theme ? Themes.light : Themes.dark}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="/:id" element={<Task />} /> */}
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
