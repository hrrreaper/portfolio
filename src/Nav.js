import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';

const Nav = () => {
  return (
    <Wrapper>
        <StyledScroll
        to="header" 
        spy={true} 
        smooth={true} 
        duration={100} 
        className='element' 
        activeClass='active'
      >
      HOME
      </StyledScroll> 
        <StyledScroll
        to="projects" 
        spy={true} 
        smooth={true} 
        duration={100} 
        className='element' 
        activeClass='active'
      >
      PROJECTS
      </StyledScroll> 
        <StyledScroll 
        to="about" 
        spy={true} 
        smooth={true} 
        duration={100} 
        className='element' 
        activeClass='active'
      >
      ABOUT
      </StyledScroll> 
        <StyledScroll
        to="contact" 
        spy={true} 
        smooth={true} 
        duration={100} 
        className='element' 
        activeClass='active'
      >
      CONTACT
      </StyledScroll> 
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0px;
  height: 10vh;
  width: 100vw;
  padding-top: 10px;
  z-index: 1000;
  background-color: #9FD9AD;
`;



const StyledScroll = styled(Scroll.Link)`
  cursor: pointer;
  letter-spacing: 3px;
  font-size: 1.2rem;
  font-weight: 500;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: #414361;
    transition: width ease-out .4s;
    margin-top: 5px;
  }

  &:hover::after {
    width: 100%;
    }

  &:hover{
    font-weight: 700;
  }
  
`;

export default Nav;
