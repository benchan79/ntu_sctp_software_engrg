import { useState } from 'react'

// import "./App.css"

export function Daniel() {
  const [number, setNumber] = useState(() => {
    return Math.floor(Math.random() * 20 + 1);
  });
  const [guess, setGuess] = useState("");
  const [pastGuesses, setPastGuesses] = useState([]);
  const [message, setMessage] = useState("Start guessing");
  const [gameOver, setGameOver] = useState(false);

  const guessChangeHandler = (e) => {
    if (isNaN(e.target.value)) {
      console.log("not a number");
      return;
    }
    setGuess(+e.target.value);
  }

  const guessHandler = () => {
    if (guess === number) {
      setMessage(`You got it! The answer is ${guess}!`);
      setGameOver(true);
      return;
    }

    setPastGuesses((prevState) =>{
      return [...prevState, guess];
      
    });

    if (guess > number) setMessage(`${guess} is too big!`);
    else if (guess < number) setMessage(`${guess} is too small!`);

    setGuess("");
  };

  const newGameHandler = () => {
    setGuess("");
    setMessage("");
    setPastGuesses([]);
    setNumber(Math.floor(Math.random() * 20 + 1));
    setGameOver(false);
  };

  return(
    <div>
      <h1>Guess Number Game</h1>
      <p>Guess a number between 1 and 20</p>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <label>Enter guess</label>
        <input type="text" onChange={guessChangeHandler} value={guess}></input>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>  
        <button type="button" onClick={guessHandler} disabled={gameOver}>
          Guess!
        </button>
        <button type="button" onClick={newGameHandler}>
          New Game
        </button>
      </div>

      <p>{message}</p>
      <div className="guesses-container">
        {pastGuesses.map((pastGuess, i) => (
          <span key={i} className="guesses-number">
            {pastGuess}
          </span>
        ))}
      </div>
    </div>
  );
}