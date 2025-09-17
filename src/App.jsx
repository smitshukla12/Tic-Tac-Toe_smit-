import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './Component/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Tic-Tac-Toe In React</h2>
      <Game />
    </>
  )
}

export default App
