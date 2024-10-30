import { useState } from "react";
import "./App.css";

// pages components

import Home from "./pages_cpnts/Home";
import About from "./pages_cpnts/About";




// the App

function App() {
  const [currentLocation, setCurrentLocation] = useState("/");

  return (
    <>
      <nav>
        <button onClick={() => setCurrentLocation("/")} type="button">Home</button>
        <button onClick={() => setCurrentLocation("/about")} type="button">About</button>
      </nav>
      <main>
        {currentLocation === "/" && <Home />}
        {currentLocation === "/about" && <About />}
      </main>
    </>
  );
}

export default App;