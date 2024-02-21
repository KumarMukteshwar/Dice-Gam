import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDices from './RoleDices'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [Score,setScore] = useState(0);

  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [Error,setError] = useState("");
  const[showRules,setshowRules] = useState(false);

  const genrateRandomNumber = (min,max)=>{
    return Math.floor(Math.random() * (max-min)+min);
  };

  const roleDices = () =>{
    if(!selectedNumber){
      setError("You have not selected any number ")
      return;
    }
    setError("")
    const randomNumber = genrateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber)

    if(selectedNumber === randomNumber){
      setScore((prev) => prev+randomNumber)
    }
    else{
      setScore((prev) => prev-2)
    }
    setSelectedNumber(undefined);
  };

  const restScore = () =>{
    setScore(0);
  }
 const showdata = () =>{
  setshowRules((prev) => !prev);
 }


  return (
    <>
   
   <Maincontainer>
    <div className="top-section">
        <TotalScore Score = {Score} setScore = {setScore}/>
        <NumberSelector selectedNumber = {selectedNumber} setSelectedNumber={setSelectedNumber}
        Error = {Error} setError = {setError}/>
        
    </div>
    
   <RoleDices currentDice = {currentDice} roleDices= {roleDices}/>
   <div className="btns">
    <OutlineButton onClick={restScore}>Reset Score</OutlineButton>
    <Button onClick={showdata}>{showRules ? "Hide":"show" } Show Rules</Button>
   </div>
    {showRules && <Rules/>} 
   </Maincontainer>
   </>
  )
}

export default GamePlay

const Maincontainer = styled.main`
/* padding-bottom:70px; */
max-width: 100%;

   .top-section{
        display: flex;
        justify-content: space-between;
        align-items: center;
   }  
   .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
   }
`;
   
