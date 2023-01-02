import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

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

  const result = () => {
    if (props.choice === "rock" && opponentsChoice === "scissors") {
      setPlayerWin("win");
      props.setScore(props.score + 1);
    } else if (props.choice === "rock" && opponentsChoice === "paper") {
      setPlayerWin("lose");
      props.setScore(props.score - 1);
    } else if (props.choice === "scissors" && opponentsChoice === "paper") {
      setPlayerWin("win");
      props.setScore(props.score + 1);
    } else if (props.choice === "scissors" && opponentsChoice === "rock") {
      setPlayerWin("lose");
      props.setScore(props.score - 1);
    } else if (props.choice === "paper" && opponentsChoice === "rock") {
      setPlayerWin("win");
      props.setScore(props.score + 1);
    } else if (props.choice === "paper" && opponentsChoice === "scissors") {
      setPlayerWin("lose");
      props.setScore(props.score - 1);
    } else {
      setPlayerWin("draw");
    }

    return;
  };

  useEffect(() => {
    result();
  }, [opponentsChoice]);
  console.log(props.score);
  return (
    <div>
      Du: {props.choice} <br />
      Gegner: {opponentsChoice} <br />
      Ergebnis:
      {playerWin === "win" && <h2>Gewonnen!</h2>}
      {playerWin === "lose" && <h2>Verloren!</h2>}
      {playerWin === "draw" && <h2>Unentschieden!</h2>}
      <Button variant="contained">
        <Link to="/" onClick={() => setOpponentChoice("")}>
          Play again
        </Link>
      </Button>
    </div>
  );
};

export default Match;
