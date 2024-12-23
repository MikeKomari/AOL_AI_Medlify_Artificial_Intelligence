import React from "react";
import Layout from "../layout/Layout";
import { IconArrowUpRight } from "@tabler/icons-react";
import CNN from "../components/strokepage/CNN";
import Stroke from "../components/strokepage/Stroke";
import CameraComponent from "../components/CameraComponent";

const StrokePage = () => {
  return (
    <>
      <Layout>
        <CNN />
        <Stroke />
        <CameraComponent />
      </Layout>
    </>
  );
};

export default StrokePage;
