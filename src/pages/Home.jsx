import React from "react";

import Layout from "../components/Layout";
import Header from "../utils/Header";
import ModalManager from "../utils/modal/ModalManager";

const Home = () => {
  return (
    <main className="">
      <Header />
      <ModalManager />
      <Layout />
    </main>
  );
};

export default Home;
