import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Mainlayout;
