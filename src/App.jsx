import { useState } from 'react'
import './App.css'
import Scoreboard from './components/scoreboard'
import Gameboard from './components/gameboard'


function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [cardOrder, setCardOrder] = useState([0,1,2,3,4,5,6,7,8,9,10,11])

  function increaseCurrent() {
    const newScore = currentScore + 1
    setCurrentScore(newScore)
    setCardOrder(makePermutation(cardOrder))
  }

  function finishGame() {
    if (currentScore > bestScore) {
      setBestScore(currentScore)
      setCurrentScore(0)
    } else {
      setCurrentScore(0)
    }
    setCardOrder(makePermutation(cardOrder))
  }

  function reset() {
    setCurrentScore(0)
    setBestScore(0)
    setCardOrder(makePermutation(cardOrder))
  }

  function makePermutation(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <h1>Hello World</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Gameboard cardOrder={cardOrder} />
      <button onClick={increaseCurrent}>Correct</button>
      <button onClick={finishGame}>Incorrect</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
