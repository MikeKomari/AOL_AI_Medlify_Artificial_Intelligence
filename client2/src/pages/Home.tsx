import React from "react";
import mainBg from "./assets/mainBG.png";
import Navbar from "../components/nav/Navbar";
function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(./assets/mainBG.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "0.4",
      }}
      className="min-h-screen w-full"
    ></div>
  );
}

export default Home;
