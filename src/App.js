import './App.css';
import Footer from "./Footer"
import Scoreboard from "./Scoreboard"
import Card from "./Card"
import Header from "./Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <div className="card-container">
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
