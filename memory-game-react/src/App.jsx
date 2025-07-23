import { useState } from "react";
import "./index.css";
import Li from "./Li.jsx";
import productsData from "./data";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [characters, setCharacters] = useState(productsData);
  const [clickedItems, setClickedItems] = useState([]);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const playAgain = () => {
    toggleModal();
    setClickedItems([]);
    setCurrentScore(0);
  };

  const increaseScore = () => {
    setCurrentScore((prevScore) => {
      const newScore = prevScore + 1;

      if (newScore > highScore) {
        setHighScore(newScore);
      }

      if (newScore === 12) {
        toggleModal();
      }

      return newScore;
    });
  };

  const handleClick = (character) => {
    if (clickedItems.includes(character.id)) {
      setClickedItems([]);
      toggleModal();
    } else {
      console.log(character.name, true);
      setClickedItems((prev) => [...prev, character.id]);
      increaseScore();
    }

    const newCharacters = shuffleArray(characters);
    setCharacters(newCharacters);
  };

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
            onClick={() => handleClick(character)}
          />
        ))}
      </ul>
      {modal && (
        <div className="modal" onClick={playAgain}>
          <div className="overlay">
            <div className="modal-content">
              <h1 className="modal-h1">Game over!</h1>
              <p className="modal-p">Your score: {currentScore}</p>
              <button className="play-btn" onClick={playAgain}>
                Play again?
              </button>
            </div>
          </div>
        </div>
      )}
      <footer className="footer">
        <p className="footer-paragraph">Copyright © 2025 Lazar Vuckovic</p>
      </footer>
    </>
  );
}

export default App;
