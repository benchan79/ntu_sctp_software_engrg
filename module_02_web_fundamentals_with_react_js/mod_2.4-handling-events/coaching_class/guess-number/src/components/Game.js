import { useState } from "react";
import { Input } from "./Input"
import { Button } from "./Button"
import { Prizes } from "./Prizes"

// const answer = Math.floor(Math.random() * 20 + 1)

export function Game () {
  // useState() runs everytime the component re-renders
  // If the useState takes a very complicated function as state,
  // it would be extremely costly.

  // useState has another way to pass in the state.
  // It can take a function version, which gets called
  // ONLY the very first time the component renders.
  const [answer, setAnswer] = useState(() => Math.floor(Math.random() * 20 + 1))
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [isOver, setIsOver] = useState(false)
  const [prize, setPrize] = useState(() => Prizes[Math.floor(Math.random() * Prizes.length + 1)])

  const inputHandler = ({target}) => {
    const value = target.value;
    if (isNaN(value)) {
      return;
    }
    setGuess(+value)
  }

  const submitHandler = () => {
    if (guess < 1 || guess > 20) {
      alert("Invalid value. Please enter a number between 1 and 20.")
      setGuess("")
      return;
    } else if (guess === answer) {
      setResult(`Correct! You won a ${prize}!`);
      setIsOver(true);
      return;
    } else if (attempts.length > 2) {
      setResult("Sorry! Please try again!");
      setIsOver(true);
      return;
    }
    if (guess < answer) {
      setResult("Your guess is lower");
    } else {
      setResult("Your guess is higher");
    }
    
    setAttempts((prevAttempts) => {
      return [...prevAttempts, guess];
    })
    setGuess("");
  }

  const restartHandler = () => {
    setGuess("");
    setResult("");
    setAttempts([]);
    setAnswer(Math.floor(Math.random() * 20 + 1));
    setIsOver(false);
    setPrize(Prizes[Math.floor(Math.random() *Prizes.length + 1)]);
  }

  // const displayattempts = 

  return(
    <div>
      <h1>Guess the Mystery Number!</h1>
      <h2>The mystery number is between 1 and 20 inclusive!</h2>
      <h2>You have only 4 chances! Good Luck!</h2>
      <h2>Enter your guess and click "Submit": </h2>
      <Input 
        onChange={inputHandler} 
        value={guess}  
      />

      <Button
        onClick={submitHandler}
        label="Submit"
        disabled={isOver}
      />

      <div style={{margin: "20px"}}>
        Result: {result}
      </div>

      <div className="attempts">
        <div style={{ display: "flex", gap: "20px" }}>
          Previous attempts: {attempts.map((tryNum) => (
            <span>{tryNum}, </span>))}
        </div>
      </div>

      <Button 
        onClick={(restartHandler)}
        label="New Game"
      />
      <hr/>
      <div className="debug">For debugging purpose. Hover to show answer.</div>
      <div className="hide">
        <ul>
          <li>answer: {answer} </li>
          <li>guess: {attempts[attempts.length-1]} </li>
          <li>typeof guess: {typeof guess}</li>
          <li>typeof +guess: {typeof +guess}</li>
          <li>attempts: {attempts} </li>
          <li>attempts.length: {attempts.length} </li>
          <li>isOver: {isOver ? "true": "false"}</li>
          <li>prize: {prize}</li>
        </ul>
      </div>
    </div>
  );
};