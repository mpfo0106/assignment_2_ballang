import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function DefaultLayout() {
  return (
    <div className="bg-white">
      <div className="h-screen bg-white mx-auto flex flex-col">
        <Header />
        <Outlet />

        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
