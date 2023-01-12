import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/Heroimage";
import Navbar from "../components/Navbar";
import TraningSection from "../components/Traning";
const Traning = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="TRANING" text="pre-Flight & In-Flight Traning." />
      <TraningSection />
      <Footer />
    </div>
  );
};

export default Traning;
