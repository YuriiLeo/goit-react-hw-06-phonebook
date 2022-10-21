import styled from 'styled-components';

export const Form = styled.form`
  border: 2px solid #00000024;
  border-radius: 4px;
  padding: 20px 200px 20px 20px;
  
  &:hover, &:focus {
    box-shadow: 0px 4px 10px 4px #9e9e9e;
    transform: scale(1.1);
  }
`;

export const Input = styled.input`
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
    border-color: #00000024;
    border-radius: 2px;
    outline: 0px;
    
    &:hover, &:focus {
        box-shadow: 0px 0px 3px 3px #2196f3;
        transform: scale(1.15);
    }
`;

export const Button = styled.button`
    padding: 0 10px;
    cursor: pointer;
    border-color: #00000024;
    border-radius: 2px;
    background-color: #00000005;

    &:hover, &:focus {

        background-color: #2196f3;
        transform: scale(1.22);
    }
`;