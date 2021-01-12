import React from 'react'
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg)
}`

const Rotate = styled.div`
border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  animation: ${rotate} 2s linear infinite;
  `

export default function Loader() {
    return (
        <Rotate />
    )
}
