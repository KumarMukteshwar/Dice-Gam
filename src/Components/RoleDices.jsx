
import styled from 'styled-components'

const RoleDices = ({currentDice,roleDices}) => {

  return (
    <DiceContainer>
      <div className='Dice' onClick={roleDices}>
        <img src={`./public/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDices

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 48px;
  .Dice{
    cursor: pointer;
  }
  p{
    font-size: 24px;
    margin-bottom: 25px;
  }
`;
