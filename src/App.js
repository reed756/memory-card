import './App.css';
import Footer from "./components/Footer"
import Scoreboard from "./components/Scoreboard"
import Card from "./components/Card"
import Header from "./components/Header"
import React, {useState} from 'react';

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardData, setCardData] = useState();
  const [randomImgOne, setRandomImgOne] = useState('https://i.imgflip.com/1ur9b0.jpg');
  const [randomImgTwo, setRandomImgTwo] = useState('https://i.imgflip.com/1g8my4.jpg');
  const [idOne, setIdOne] = useState('2');
  const [idTwo, setIdTwo] = useState('1');
  const [cardArray, setCardArray] = useState([]);

  useState(() => {
    fetch("https://api.imgflip.com/get_memes", {
  })
            .then(response => response.json())
            .then(data => {
                setCardData({data})
            })
  }, []);

  function random() {
    return Math.floor(Math.random() * (99 + 1));
  }

  function handleClick(event) {
    const randomOne = random();
    const randomTwo = random();
    setRandomImgOne(cardData.data.data.memes[randomOne].url)
    setRandomImgTwo(cardData.data.data.memes[randomTwo].url)
    setIdOne(randomOne)
    setIdTwo(randomTwo)
    setScore(score + 1)
    if (!cardArray.includes(event.target.id) || cardArray === []) {
      setCardArray(cardArray.concat(event.target.id))
    } else {
      setCardArray([]);
      setBestScore(score);
      setScore(0);
    }
  }

  return (
    <div className="App">
      <Header />
      <Scoreboard 
        score={score}
        bestScore={bestScore}
      />
      <div className="card-container">
        <Card
          image={ randomImgOne }
          onClick={ handleClick }
          id={ idOne }
        />
        <Card
          image={ randomImgTwo }
          onClick={ handleClick }
          id={ idTwo }
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
