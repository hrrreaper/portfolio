import React from 'react';
import styled from 'styled-components';
import Youtube from './Youtube';
import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <Element id='projects' name='projects' className="element">
    <Wrapper>
      <H2>featured projects</H2>
      <Description>
        <div>
          Keg inventory system using Untappd API integration.
        </div>
        <div>
          Frontend: React & Styled Components
        </div>
        <div>
          Backend: Node.js, Express & MongoDB Atlas
        </div>
          <Youtube embedId="dto_rcA2HWo" />
      </Description>
      </Wrapper>
      </Element>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const H2 = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  margin: 30px 0;
  margin-top: 50px;
  text-shadow: 2px 2px 0px #9FD9AD;
`;

const Description = styled.div`
  margin-top: 20px;
  display: flex;
  line-height: 1.5;
  flex-direction: column;
`;

export default Projects;
