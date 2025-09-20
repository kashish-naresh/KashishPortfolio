import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import HomePage from "./pages/HomePage";
import CV from "./pages/CV";
import Works from "./pages/Works";

const App = () => {
  const basename =
    process.env.NODE_ENV === "production" ? "/KashishPortfolio" : "/";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path="cv" element={<CV />} />
        <Route path="works" element={<Works />} />
      </Route>
    )
  );

  return <RouterProvider router={router} basename={basename} />; // <- pass basename here
};

export default App;
