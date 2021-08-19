import './App.css';
import Footer from "./Footer"
import Scoreboard from "./Scoreboard"
import Card from "./Card"
import Header from "./Header"
import React, {useState} from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardData, setCardData] = useState();

  function random() {
    return Math.floor(Math.random() * (151 + 1));
  }

  useState(() => {
    fetch("https://api.pokemontcg.io/v2/cards?q=set.id=base2", {
      headers: {
        'X-API-KEY': 'ccbeb006-c385-4584-bc89-cb3e6ee3c0bc',
    },
  })
            .then(response => response.json())
            .then(data => {
                setCardData(data)
            })
  }, []);

  console.log(cardData)

  return (
    <div className="App">
      <Header />
      <Scoreboard 
        score={score}
        bestScore={bestScore}
      />
      <div className="card-container">
        <Card
          // image={cardData.data[12].images.small}
        />
        <Card/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
