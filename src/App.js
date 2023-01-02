import React, { useState } from "react";
import Header from "./components/Header";
import Play from "./components/Play";
import Match from "./components/Match";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Header score={score} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Play setChoice={setChoice} />} />
            <Route
              path="match"
              element={
                <Match choice={choice} score={score} setScore={setScore} />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
