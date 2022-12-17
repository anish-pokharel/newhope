import { useState } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Registered from "./Registered";
import Service from "./Service";
import Work from "./Work";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../src/components/common/Nav";
import Head from "./components/common/Head";
import Footer from "./components/common/Footer/Footer";
import Location from "../src/components/common/Location/Location";

function App() {
  return (
    <>
      <BrowserRouter>
        <Head />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/registered" element={<Registered />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />

          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <Location />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
