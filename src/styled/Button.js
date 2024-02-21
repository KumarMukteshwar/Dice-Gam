import styled from "styled-components"
export  const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background:#000000;
    border-radius:10px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    &:hover{
        background-color:white;
        border:1px solid black;
        color: black;
    }
`;
export  const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover{
        background-color:black;
        border:1px solid transparent;
        color: white;
    }
`;