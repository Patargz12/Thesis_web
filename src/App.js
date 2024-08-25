import "./App.css";

import { Button } from "flowbite-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trailer from "./components/Trailer";
import Gallery from "./components/Gallery";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Hero />
      <Trailer />
      <Gallery />
      <Certificate />
      <Footer />
    </div>
  );
};

export default App;
