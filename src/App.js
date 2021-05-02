import About from './About';
import { GlobalStyles } from './GlobalStyles';
import Header from './Header';
import Projects from './Projects';
import Nav from './Nav';


function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Projects />
      <About />
      <Nav />
    </div>
  );
}

export default App;
