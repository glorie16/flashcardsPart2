import React, { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcard';

const App = () => {
  const flashcards = [
    { word: "Salamat", translation: "Thank you" },
    { word: "Magandang umaga", translation: "Good morning" },
    { word: "Kain", translation: "Eat" },
    { word: "Magandang gabi", translation: "Good evening" },
    { word: "Ingat", translation: "Take care" },
    { word: "Oo", translation: "Yes" },
    { word: "Hindi", translation: "No" },
    { word: "Sige", translation: "Okay" },
    { word: "Kamusta?", translation: "How are you?" },
    { word: "Bukas", translation: "Tomorrow" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);


  const card = flashcards[currentIndex];

  const [guess, setGuess] = useState("");
  const [correct, setCheckCorrect] = useState(null);


  /**const goNext = () => {


    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentIndex);

    
    setCurrentIndex(newIndex);
      setFlipped(false);
  };

  **/
  
  const goNext = () => {
    if (currentIndex != flashcards.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      setFlipped(false);
      setGuess("");
      setCheckCorrect(null);
    }
  };

  const goBack = () => {
    if (currentIndex != 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
      setFlipped(false);
      setGuess("");
      setCheckCorrect(null);
    } 
   
  };
  
  const handleFlip = () => {
    setFlipped(prev => !prev);
};

  return (
    <div className="App">
      <h1>Tagalog Flash Cards</h1>
      <h3>Learn some common Tagalog words and phrases used in conversation!</h3>
      <h3> Number of cards: {flashcards.length}</h3>

    <div className="flashcard">
        <Flashcard word={card.word} translation={card.translation} onClick={handleFlip} 
          flipped={flipped}
        />
      </div>

    <div className="guess-section">
      <input
        type="text"
        placeholder="Enter your answer here: "
        value={guess}
          onChange={(e) => setGuess(e.target.value)}
          
          className={`guess-input ${correct === false ? 'incorrect' : correct === true ? 'correct' : ''}`}
        />

        <button onClick={() => {
          if (guess.trim() != ""&& flipped===false) {
            if (guess.toLowerCase() === card.translation.toLowerCase()) {
              setCheckCorrect(true);
            } else {
              setCheckCorrect(false);
            }
          }
        }
        } className="check-answer">Check Answer</button>
      </div>

      < button onClick={goBack} className={`back-button ${currentIndex===0 ? 'greyed' : ''}`} >Back</button>
      < button onClick={goNext} className={`next-button ${currentIndex=== flashcards.length - 1 ? 'greyed' : ''}`} >Next</button>
      
         </div>
  )
  
}

export default App;