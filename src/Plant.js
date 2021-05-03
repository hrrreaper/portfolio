import React from 'react';
import plant from './assets/plant.png';
import styled, { keyframes } from 'styled-components';

const Plant = () => {
  return (
    <div>
      <ImgDiv>
      <Img src={plant} />
      </ImgDiv> 
    </div>
  )
}

const swing = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const ImgDiv = styled.div`
  z-index: -1;
  width: 100 vw;
`;

const Img = styled.img`
  z-index: -1;
  width: 450px;
  float: right;
  position: absolute;
  top: -4vh;
  left: -2vw;
  animation: ${swing} 3s ease forwards infinite;
`;

export default Plant
