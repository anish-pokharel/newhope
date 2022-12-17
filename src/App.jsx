import { useState } from "react";
import "./App.css";
import Home from "./RenderPages/Home";
import About from "./RenderPages/About";
import Blog from "./RenderPages/Blog";
import Contact from "./RenderPages/Contact";
import Registered from "./RenderPages/Registered";
import Service from "./RenderPages/Service";
import Work from "./RenderPages/Work";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/common/Nav";
import Head from "./components/common/Head";
import Footer from "./components/common/Footer/Footer";
import Location from "./components/common/Location/Location";
import Contactus from "./components/common/Contactus/Contactus";

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
        <Contactus />
        <Location />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
