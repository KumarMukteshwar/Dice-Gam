import { useState } from 'react'
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay';

function App() {
  const [isGameStared,setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>
    {
      isGameStared ? <GamePlay/> :<StartGame toggle = {toggleGamePlay}/>
    }
     
    </>
  )
}

export default App

// import styled from "styled-components"
// const Button = styled.button`
//   background-color:black;
//   color:white;
//   padding:10px;
// `;