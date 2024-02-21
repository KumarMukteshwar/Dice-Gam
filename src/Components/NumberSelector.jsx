
import styled from 'styled-components'



const NumberSelector = ({setError,Error,selectedNumber,setSelectedNumber}) => {
    const arrNumber = [1,2,3,4,5,6];

    const numberSelectorHandler = (value) =>{
        setSelectedNumber(value);
        setError("")
    }

    // console.log(selectedNumber)
  return (
    <NumberSelectorContainer>
        <p className='error'>{Error}</p>
        <div className="flex">
        {
            arrNumber.map((value,i)=>(
                <Box isSelected ={value == selectedNumber}
                 key = {i} onClick={() => numberSelectorHandler(value)}
                    
                >{value}</Box>
            ))
        }
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;
const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: bold;
    background-color: ${(props) => props.isSelected ? "black":"white"};
    color: ${(props) => !props.isSelected ? "black":"white"};
     
`
const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
margin-left: 600px;
    .flex{
        display: flex;
        gap: 25px;
    }
    p{
        font-size: 24px;
        font-weight: bold;
    }
    .error{
        color: red;
    }
`
