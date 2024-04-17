import { useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
// import "./App.css";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* <Button className="mt-10" href="#login">
          Testing
        </Button> */}
        <Router>
          <Header />
        </Router>
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
    </>
  );
};

export default App;
