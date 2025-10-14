import { useState } from 'react'
import './App.css'
import Scoreboard from './components/scoreboard'


function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  function increaseCurrent() {
    const newScore = currentScore + 1
    setCurrentScore(newScore)
  }
  
  function finishGame() {
    if (currentScore > bestScore) {
      setBestScore(currentScore)
      setCurrentScore(0)
    } else {
      setCurrentScore(0)
    }
  }

  return (
    <>
      <h1>Hello World</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <button onClick={increaseCurrent}>Correct</button>
      <button onClick={finishGame}>Incorrect</button>
    </>
  )
}

export default App
