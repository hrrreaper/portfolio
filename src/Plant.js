import React from 'react';
import plant from './assets/plant.png';
import styled, { keyframes } from 'styled-components';

const Plant = () => {
  return (
    <>
      <ImgDiv>
      <Img src={plant} />
      </ImgDiv> 
    </>
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
  /* z-index: -1; */
  /* width: 80vw; */
`;

const Img = styled.img`
  z-index: -1;
  width: 450px;
  float: right;
  position: absolute;
  top: -4vh;
  left: -2vw;
  animation: ${swing} 4s ease-in-out forwards infinite;

  @media screen and (max-width: 500px) {
    top: 3vh;
    left: -12vw;
  }
  @media screen and (max-width: 400px) {
    top: 5vh;
    left: -10vw;
    width: 350px;
  }
`;

export default Plant
