import React from 'react'
import styled from "styled-components"
import { Button } from '../styled/Button';


const StartGame = ({toggle}) => {
  return (
  
    <Container>
      <div>
      <img src="./public/Frame 5.png" alt="" />
      </div>
      <div className="content">
      <Button onClick={toggle} >play Now </Button>
      </div>
    </Container>
    
  )
}

export default StartGame;

const Container = styled.div`
 /* max-width: 180px; */
 /* height: 100vh; */
 /* display: flex; */
 margin: 0 auto;
 .content{
  margin-left: 962px;
  margin-top:-213px;

 }
`;


