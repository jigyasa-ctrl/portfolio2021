import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Homepage />
      <About />
      <Projects />
    </div>
  );
}

export default App;
