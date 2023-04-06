import { useState } from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Experience,
  Tech,
  Navbar,
  Feedbacks,
  Hero,
  Contact,
  Works,
  StarsCanvas,
  Footer,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
