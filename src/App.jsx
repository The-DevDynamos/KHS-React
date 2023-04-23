import React from "react";
import   NavBar  from "./components/navbar";
import Services from "./components/services";
import Hero from "./components/hero";
import Whyus from "./components/why_us";
import About from "./components/about";
import ChooseAPlan from "./components/plans";
import RepairProcess from "./components/repairs";
import Footer from "./components/footer";

export default function App () {
  return (
    <div>
      <NavBar />
      <div>
        <Services />
      </div>
      <Hero />
      <About />
      <Whyus />
      <ChooseAPlan />
      <RepairProcess />
      <Footer />
    </div>
  )
}