import React from "react";
import Header from "./components/Header";
import Play from "./components/Play";
import Match from "./components/Match";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Play />} />
            <Route path="game" element={<Match />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
