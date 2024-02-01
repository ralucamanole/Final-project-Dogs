import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Formular from "./Pages/Formular";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import DogCard from "./Components/Card/DogCard";
import Contact from "./Pages/Contact";
import { DogApi } from "./Pages/DogApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/formular/:userId",
    element: <Formular />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/DogApi",
    element: <DogApi />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <main>
        <RouterProvider router={router} />
        <Router>
          <Routes>
            <Route path="/" exact component={DogCard} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/formular/:userId" component={Formular} />
            <Route path="/DogApi" component={DogApi} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
