import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/Heroimage";
import Navbar from "../components/Navbar";
import Pricingcard from "../components/Pricing";
export const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PRICING" text="Choose your trip" />
      <Pricingcard />
      <Footer />
    </div>
  );
};
export default Pricing;
