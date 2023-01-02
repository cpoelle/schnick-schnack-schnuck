import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="match">
      My Choice: {props.choice} <br />
      Opponents Choice: {opponentsChoice} <br />
      Result:
      {playerWin === "win" && <h2>You win!</h2>}
      {playerWin === "lose" && <h2>You lose!</h2>}
      {playerWin === "draw" && <h2>Draw!</h2>}
      <Link to="/" onClick={() => setOpponentChoice("")}>
        Play again
      </Link>
    </div>
  );
};

export default Match;
