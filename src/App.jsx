import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./components/home/Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Registered from "./Registered";
import Service from "./Service";
import Work from "./Work";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Head from "./components/common/Head";

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
      </BrowserRouter>
    </>
  );
}

export default App;
