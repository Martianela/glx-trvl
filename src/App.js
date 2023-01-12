import React from "react";
import { Routes, Route } from "react-router-dom";

import Contact from "./routes/Contact";

import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Traning from "./routes/Traning";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Traning" element={<Traning />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
