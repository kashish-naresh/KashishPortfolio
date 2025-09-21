import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import HomePage from "./pages/HomePage";
import CV from "./pages/CV";
import Works from "./pages/Works";

const App = () => {
  // Keep your existing basename logic
  const basename =
    process.env.NODE_ENV === "production" ? "/KashishPortfolio" : "/";

  return (
    <HashRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<HomePage />} />
          <Route path="cv" element={<CV />} />
          <Route path="works" element={<Works />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
