import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import pic1 from './assets/pic1.jpg';

const About = () => {
  return (
    <Element id='about' name='about' className="element">
      <Wrapper>
        <Img src={pic1} />
        <Text>
          <p>
            Hi 👋 I'm Heather Reaper. A recent graduate from Concordia's Full-Stack Web Development Bootcamp with a background in digital marketing, a passion for craft beer and my dog, Archie. I'm enthusiastic about learning new technologies and am looking for opportunities to practice and expand my knowledge.
            Skilled in React, Node.js, JavaScript, Redux, HTML, CSS, MongoDB, REST APIs, Email Campaign Management and Google Analytics. 
          </p>
        </Text>
        </Wrapper>
    </Element>
  )
}

const Img = styled.img`
  width: 250px;
  border-radius: 50%;
  margin-right: 20px;
`;

const Text = styled.div`
  width: 40vw;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 2px 2px 8px  2px rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export default About;
