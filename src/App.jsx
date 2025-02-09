import { useState } from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import PokeDex from "./components/PokeDexCard";



function App() {
  const [count, setCount] = useState(0);
  const [bestCount, setBestCount] = useState(0);
  const [previous, setPrevious] = useState('none');
  const [shuffleTarget, setShuffleTarget] = useState('');
  
  function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  //still possible bug here
  function addCount(e) {
    if (e.target.id != previous){
      setPrevious(e.target.id)
      setCount(count + 1);
      shuffle(shuffleTarget)
      console.log(count)
      console.log(bestCount)
      if (count >= bestCount){
        setBestCount(bestCount + 1);
      }
    } else {
      setPrevious('');
      setBestCount(count)
      setCount(0);
    }
    
  }

  function resetCount(){
    setCount(0)
    setBestCount(0)
  }
  return (
    <>
    {
    bestCount != 8 ? <div>
        <ScoreBoard count={count} addCount={addCount} setCount={setCount} bestCount={bestCount} previous={previous}/>
        <PokeDex shuffle={shuffle} shuffleTarget={shuffleTarget} setShuffleTarget={setShuffleTarget} count={count} addCount={addCount} setCount={setCount} previous={previous} setPrevious={setPrevious}/>
      </div>
      : 
      <>
      <ScoreBoard count={count} addCount={addCount} setCount={setCount} bestCount={bestCount} previous={previous}/>
      <h1>
        You win, good memory!
        <button onClick={resetCount} >Reset</button>
      </h1>
      </>
       }

      
    </>
  );
}


export default App;
