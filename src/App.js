import About from './About';
import { GlobalStyles } from './GlobalStyles';
import Header from './Header';
import Projects from './Projects';
import Nav from './Nav';
import styled from 'styled-components';


function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Projects />
      <About />
      <Nav />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
`;

export default App;
