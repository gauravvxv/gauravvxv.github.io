import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
   
    <Navbar/>
     <About/>
     <Skills/>
     <Project/>
    </div>
  );
}

export default App;
