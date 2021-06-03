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
            <div>
              Hi 👋 I'm Heather Reaper!
            </div>
          <p>
            A graduate from Concordia's Full-Stack Web Development Bootcamp with a background in digital marketing, a passion for craft beer and my dog, Archie. I'm enthusiastic about learning new technologies and am looking for opportunities to practice and expand my knowledge.
            Skilled in React, Node.js, JavaScript, Redux, HTML, CSS, MongoDB, REST APIs, SQL, Email Campaign Management and Google Analytics.
          </p>
        </Text>
        </Wrapper>
    </Element>
  )
}


const Img = styled.img`
  width: 280px;
  border-radius: 50%;
  margin-right: 20px;
  
    @media screen and (max-width: 700px) {
    width: 200px;
  }
`;

const Text = styled.div`
  width: 50vw;
  background-color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
  line-height: 1.5;
  font-weight: 500;
  border-radius: 20px;
  padding: 10px;
  text-shadow: 1px 1px 0px #9FD9AD;
  box-shadow: 2px 2px 8px  2px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 700px) {
    font-size: .9rem;
    letter-spacing: 0px;
    width: 80vw;
    margin-top: 10px;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

   @media screen and (max-width: 700px) {
  flex-direction: column;
  }
`;

export default About;
