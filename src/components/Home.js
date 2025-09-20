import React, { useState } from "react";
import Projects from "./Projects";
import Hero from "./Hero";

const Home = () => {
  return (
    <section id="home" className="">
      <h1 className="place-self-center mb-8 mt-36 font-semibold  text-2xl lg:text-4xl">
        Let's build it together.
      </h1>
      <Hero />
      <Projects />
    </section>
  );
};

export default Home;
