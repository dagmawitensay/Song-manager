import React from 'react';
import styled from '@emotion/styled';



const Container = styled.div`
    margin: 140px auto;
`

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #007bff;
  
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`; 

export default function Spin() {
    return (
      <Container>
        <Spinner></Spinner>
      </Container>
    );
}