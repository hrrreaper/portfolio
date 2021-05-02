import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Nav = () => {
  return (
    <Wrapper>
      <NavBtn>
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

      </NavBtn>
        {/* <StyledScroll
        to="contact" 
        spy={true} 
        smooth={true} 
        duration={100} 
        className='element' 
        activeClass='active'
      >
      CONTACT
      </StyledScroll>  */}
      <Links>
      <A href='https://www.linkedin.com/in/heatherreaper/' target="_blank">
      <FaLinkedin size={25}/>
      </A>
      <A href='https://github.com/hrrreaper' target="_blank">
      <FaGithub size={25} />
      </A>
      <A href='mailto:heather.reaper@gmail.com'>
      <MdEmail b size={25} />
      </A>
      </Links>

    </Wrapper>
  )
}
const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0px;
  height: 10vh;
  width: 100vw;
  padding-top: 10px;
  z-index: 1000;
  background-color: #9FD9AD;
`;

const NavBtn = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;

const Links = styled.div`
  display: flex;
  margin-right: 40px;
`;

const A = styled.a`
  margin-left: 20px;
  color: #414361;
  
  &:hover {
    color: #4A7C59;
  }
`;

const StyledScroll = styled(Scroll.Link)`
  cursor: pointer;
  letter-spacing: 3px;
  font-size: 1.2rem;
  font-weight: 500;
  text-shadow: 2px 3px 0px #C1EDCC;
  margin-left: 20px;

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
