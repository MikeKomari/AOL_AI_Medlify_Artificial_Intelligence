import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import CameraComponent from "./components/CameraComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
// import Spline from "@splinetool/react-spline";
// <Spline scene="https://prod.spline.design/PbuiihIc1IahRRgo/scene.splinecode" />
