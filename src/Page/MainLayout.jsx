import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import TrustedBrands from "../component/TrustedBrands";
import SecondarySection from "../component/SecondarySection";
import HeaderNotification from "../component/HeaderNotification";

const MainLayout = () => {
  return (
    <div className="container mx-auto w-[1120px]">
      <Header />
      <HeaderNotification />
      <Hero />
      <TrustedBrands />
      <SecondarySection />
    </div>
  );
};

export default MainLayout;
