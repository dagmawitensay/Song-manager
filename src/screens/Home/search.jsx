import React from 'react';
import styled from '@emotion/styled';


const InputComponent = styled.input`
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  font-size: 20px;
  font-family: sans-serif;
  background-color: #fffdfc;
  padding: 10px 15px;
  color: black;
  height: 30px;
  border-radius: 15px;
  border: 1px solid grey;
  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export default function Input() {
    return (
      <Container>
        <InputComponent placeholder="Search"/>
      </Container>
    )
}