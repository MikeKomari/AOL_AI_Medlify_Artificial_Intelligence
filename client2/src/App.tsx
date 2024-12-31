import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StrokePage from "./pages/StrokePage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/strokecheckup", element: <StrokePage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// import Spline from "@splinetool/react-spline";
// <Spline scene="https://prod.spline.design/PbuiihIc1IahRRgo/scene.splinecode" />
