import { useState } from "react";
import "./index.css";
import Li from "./Li.jsx";
import productsData from "./data";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [characters, setCharacters] = useState(productsData);

  return (
    <>
      <header>Rick and Morty memory game</header>
      <div className="score-div">
        <span className="current-score score">
          Current score: {currentScore}
        </span>
        <span className="high-score score">High score: {highScore} </span>
      </div>
      <ul className="characters-list">
        {characters.map((character) => (
          <Li
            key={character.id}
            id={character.id}
            name={character.name}
            img={character.image}
          />
        ))}
      </ul>
      <footer className="footer">
        <p className="footer-paragraph">Copyright © 2025 Lazar Vuckovic</p>
      </footer>
    </>
  );
}

export default App;
