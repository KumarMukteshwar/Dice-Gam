import React from 'react'
import styled from 'styled-components'

const TotalScore = ({Score}) => {
  return (
    <ScoreContainer>
      <h1>{Score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div`
max-width: 200px;
gap:10px;
text-align: center;
    h1{
        margin-top: 20px;
        font-size: 100px;
        margin-bottom: 2px;   
    }
    p{
        margin-top: 2px;
        font-size: 24px;
        font-weight: 50px;
    }
`;
