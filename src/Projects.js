import React from 'react';
import styled from 'styled-components';
import Youtube from './Youtube';
import { Element } from 'react-scroll';
import dog1 from './assets/dog1.PNG';
import dogs2 from './assets/dog2.PNG';
import dogs3 from './assets/dog3.PNG';
import dogs4 from './assets/dog4.PNG';
import dogs5 from './assets/dog5.PNG';
import bob1 from './assets/bobsgame1.PNG';
import bob2 from './assets/bobsgame2.PNG';
import bob3 from './assets/bobsgame3.PNG';
import mosaic1 from './assets/mosaic-project-1.PNG';
import mosaic2 from './assets/mosaic-project-2.PNG';
import mosaic3 from './assets/mosaic-project-3.PNG';
import mosaic4 from './assets/mosaic-project-4.PNG';
import mosaic5 from './assets/mosaic-project-5.PNG';

const Projects = () => {
  return (
    <Element id='projects' name='projects' className="element">
    <Wrapper>
      <H2>featured projects</H2>
      <Description>
        <H3>
          Mosaic Inventory
        </H3>
        <div>
          Keg inventory system using Untappd API integration.
        </div>
        <div>
          Frontend: React & Styled Components
        </div>
        <div>
          Backend: Node.js, Express & MongoDB Atlas
        </div>
          <div>
            View a demo <A href='https://youtu.be/7Obar6Y30cU' target='_blank'>on YouTube!</A>
          </div>
          <ImgsDiv>
            <Img src={mosaic5} />
            <Img src={mosaic1} />
            <Img src={mosaic2} />
            <Img src={mosaic3} />
            <Img src={mosaic4} />
          </ImgsDiv>
      </Description>
      <Description>
        <H3>
          Bob's Burgers Game
        </H3>
        <div>
          Build using Object Oriented Programming with JavaScript.
        </div>
        <div>
          Play it live <A href='https://belcherfamilyfoodfight.netlify.app/' target='_blank'>here!</A> Or view a demo <A href='https://youtu.be/7Obar6Y30cU' target='_blank'>on YouTube!</A>
        </div>
          <ImgsDiv>
          <Img src={bob1} />
          <Img src={bob2} />
          <Img src={bob3} />
        </ImgsDiv>
      </Description>
      <Description>
        <H3>
          DogSpace
        </H3>
        <div>
          This was a fun mini project building a Facebook clone.
        </div>
        <div>
          Frontend: React & Styled Components
        </div>
        <div>
          Backend: Node.js & Express
        </div>
        <ImgsDiv>
          <Img src={dogs5} />
          <Img src={dogs2} />
          <Img src={dogs3} />
          <Img src={dogs4} />
          <Img src={dog1} />
        </ImgsDiv>
          
      </Description>
      </Wrapper>
      </Element>
  )
}

const ImgsDiv = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const Img = styled.img`
  height: 450px;
  margin-right: 20px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100vh; */
  width: 100vw;
  margin-bottom: 100px;
`;

const A = styled.a`
 color: #4A7C59;
 font-weight: 700;
`;

const H3 = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-size: 1.3rem;
  padding: 10px;
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
  width: 70vw;
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  line-height: 1.5;
  flex-direction: column;
  background-color: white;
  padding: 20px 40px;
  border-radius: 20px;
  box-shadow: 2px 2px 8px  2px rgba(0, 0, 0, 0.3);
`;

export default Projects;
