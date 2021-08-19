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
    return Math.floor(Math.random() * (57 + 1));
  }

  useState(() => {
    fetch("https://api.pokemontcg.io/v2/cards", {
      headers: {
        'X-API-KEY': 'ccbeb006-c385-4584-bc89-cb3e6ee3c0bc',
    },
  })
            .then(response => response.json())
            .then(data => {
                setCardData({data})
            })
  }, []);

  console.log(cardData.data.data[1].images.small)

  return (

    <div className="App">
      <Header />
      <Scoreboard 
        score={score}
        bestScore={bestScore}
      />
      <div className="card-container">
        <Card
          image={cardData.data.data[1].images.small}
        />
        <Card/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
