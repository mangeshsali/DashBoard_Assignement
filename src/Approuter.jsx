import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "./Page/NotFound";
import MainLayout from "./Page/MainLayout";
import SlackUI from "./Page/SlackUI";

const Approuter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
    </Routes>
  );
};

export default Approuter;
