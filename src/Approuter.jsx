import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "./Page/NotFound";
import MainLayout from "./Page/MainLayout";

const Approuter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Approuter;
