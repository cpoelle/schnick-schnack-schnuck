import React from "react";
import { Link } from "react-router-dom";

const Play = ({ setChoice }) => {
  const setMyChoice = (e) => {
    setChoice(e.target.dataset.id);
  };

  return (
    <div>
      <Link to="/match">
        <div data-id="paper" onClick={setMyChoice} className="icon icon--paper">
          Paper
        </div>
      </Link>
      <Link to="/match">
        <div
          data-id="scissors"
          onClick={setMyChoice}
          className="icon icon--paper"
        >
          Scissors
        </div>
      </Link>
      <Link to="/match">
        <div data-id="rock" onClick={setMyChoice} className="icon icon--paper">
          Rock
        </div>
      </Link>
    </div>
  );
};

export default Play;
