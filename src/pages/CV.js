import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Features from "../components/Features";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const CV = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the element with that ID
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Small timeout to ensure the page has rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    // If no hash, scroll to top of page
    else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return (
    <div className="container mx-auto px-4 lg:px-10 lg:mb-36">
      <About />
      <Experience />
      <Education />
      <Achievements />
      <Features />
    </div>
  );
};

export default CV;
