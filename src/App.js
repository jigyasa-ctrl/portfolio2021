import './App.css';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Blogs from './Components/Blogs';

function App() {
  return (
    <div className="App">
      <Homepage />
      <About />
      <Projects />
      <Experience />
      <Blogs />
    </div>
  );
}

export default App;
