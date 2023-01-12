import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/Heroimage";
import Footer from "../components/Footer";
import Form from "../components/Form";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTACT" text="Contact GAX Traival" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
