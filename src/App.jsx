import { useState } from 'react'

// import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      
      <Courses />
       <CTA />
      <Features />
      
      <Testimonials />
     
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

