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
    fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(data => {
                setCardData({data})
            })
  }, []);
  console.log(cardData)
  console.log(random())
  return (

    <div className="App">
      <Header />
      <Scoreboard 
        score={score}
        bestScore={bestScore}
      />
      <div className="card-container">
        <Card 
          image={cardData.data.results[0].url}
        />
        <Card 
          image={cardData.data.results[0].url}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
