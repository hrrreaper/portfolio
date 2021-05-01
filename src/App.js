import About from './About';
import { GlobalStyles } from './GlobalStyles';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
