import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaNodeJs, FaJsSquare, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import Plant from './Plant';
import { Element } from 'react-scroll';


const Header = () => {
  return (
    <Element id='header' name='header' className="element">
    <Wrapper>
      <Plant />
      <Div>
      <H1>
        Cheers, I'm Heather!
      </H1>
      </Div>
      <Text>
      <div>
        Full-Stack Web Developer with a background in Digital Marketing.
      </div>
      <div>
        Craft Beer Enthusiast. Dog lover.
      </div>

      <Icons><FaReact className="icon" size={50}/> <FaNodeJs className="icon" size={50}/> <FaJsSquare className="icon" size={50}/> <FaCss3Alt  className="icon" size={50}/> <FaHtml5 className="icon" size={50}/></Icons>
      </Text>
      </Wrapper>
      </Element>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  
`;

const slide = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const Div = styled.div`
  z-index: 100;
  width: 100vw;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const H1 = styled.h1`
  text-shadow: 8px 9px 0px white;
  margin-top: 15vh;
  background-image: url(https://media.giphy.com/media/VIzmAi5KS3RyRhY9Sq/source.gif);
	background-size: cover;
  background-position: center;
	color: transparent;
	-webkit-background-clip: text;
  width: fit-content;
  font-size: 7rem;
  font-family: 'Righteous', cursive;
  text-transform: uppercase;
  transition: 1s ease;
  animation: ${slide} 2s ease;

  @media screen and (max-width: 700px) {
    margin-top: 10vh;
    font-size: 5rem;
  }
  @media screen and (max-width: 500px) {
    margin-top: 17vh;
    font-size: 4.75rem;
  }
  @media screen and (max-width: 400px) {
    margin-right: 10px;
    margin-left: 10px;
    font-size: 4.5rem;
  }
`;


const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const Text = styled.div`
  position: absolute;
  bottom: 10vh;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 2px 2px 0px white;
  letter-spacing: 2px;
  padding: 15px;
  background-color: rgba(193, 237, 204, 0.5);
  border-radius: 20px;
  animation: ${fadeIn} 5s ease;

  @media screen and (max-width: 700px) {
    bottom: 0vh;
  }
`;

const Icons = styled.div`
  margin-top: 20px;
  
  .icon {
    margin: 10px;
    color: #414361;

    @media screen and (max-width: 500px) {
    margin: 3px;
  }
  }


`;

export default Header
