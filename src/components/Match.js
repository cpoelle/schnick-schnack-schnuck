import React, { useEffect, useState } from "react";

const Match = (props) => {
  const [opponentsChoice, setOpponentChoice] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const newOpponentPick = () => {
    const choices = ["paper", "rock", "scissors"];
    return setOpponentChoice(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newOpponentPick();
  }, []);

  return (
    <div className="match">
      My Choice: {props.choice} <br />
      Opponents Choice: {opponentsChoice}
    </div>
  );
};

export default Match;
