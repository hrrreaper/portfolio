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
            Hi, I'm Heather! A recent graduate from Concordia University's Full-Stack Web Development program. I have over 5 year's experience in digital marketing where I worked closely with developers and found their work more interesting than mine.
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
