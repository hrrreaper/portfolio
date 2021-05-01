import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element id='contact' name='contact' className="element">
      <Wrapper>
        
        <h2>CONTACT ME!</h2>

      <div>
        Find me on LinkedIn: Heather Reaper
      </div>
      
      <div>
        View my GitHub here:
      </div>

      <div>
        email: heather.reaper@gmail.com
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

export default Contact
