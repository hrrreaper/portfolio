import React from 'react';
import styled from 'styled-components';
import Youtube from './Youtube';

const Projects = () => {
  return (
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
  )
}

const Wrapper = styled.div`
  background-color: #BBD5ED;
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
`;

const Description = styled.div`
  margin-top: 20px;
  display: flex;
  line-height: 1.5;
  flex-direction: column;
`;

export default Projects;
