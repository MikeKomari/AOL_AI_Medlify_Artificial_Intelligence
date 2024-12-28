import React, { useRef } from "react";
import Layout from "../layout/Layout";
import { IconArrowUpRight } from "@tabler/icons-react";
import CNN from "../components/strokepage/CNN";
import Stroke from "../components/strokepage/Stroke";
import CameraComponent from "../components/CameraComponent";

const StrokePage = () => {
  const cameraRef = useRef<HTMLDivElement | null>(null);

  const handleGoToCamera = () => {
    if (cameraRef.current) {
      cameraRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Layout>
        <CNN onNavigateToCamera={handleGoToCamera} />
        <Stroke />
        <div ref={cameraRef}>
          <CameraComponent />
        </div>
      </Layout>
    </>
  );
};

export default StrokePage;
