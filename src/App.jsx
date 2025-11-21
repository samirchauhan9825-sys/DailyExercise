import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Exelist from "./Exelist";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Details from "./Details";
import Bodypart from "./Bodypart";
import Equipment from "./Equipment";
import Target from "./Target";
import BodypartbyTag from "./BodypartbyTag";
import Equipmentbytag from "./Equipmentbytag";
import Targetbytag from "./Targetbytag";
import SearchExe from "./SearchExe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/exelist" element={<Exelist/>} />
            <Route path="/searchExe" element={<SearchExe/>} />
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/bodypart" element={<Bodypart/>} / >
            <Route path="/equipment" element={<Equipment/>} />
            <Route path="/target" element={<Target/>} />
            <Route path="/bodypartbytag/:bodypart" element={<BodypartbyTag/>} />
            <Route path="/equipmentbytag/:equipment" element={<Equipmentbytag/>} />
            <Route path="/targetbytag/:target" element={<Targetbytag/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
