import React from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/Home";
import CameraComponent from "../components/CameraComponent";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="min-w-full grid flex-col p-4 place-items-center grid-cols-1">
        <Navbar />
        <Home />
        <Footer />
        <CameraComponent />
      </div>
    </>
  );
}

export default Layout;
