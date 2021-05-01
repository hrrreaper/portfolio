import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element id='about' name='about' className="element">
      <Wrapper>
        <div>
        I'm Heather Reaper blah blah
        </div>
        </Wrapper>
    </Element>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default About;
