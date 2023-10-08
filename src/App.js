import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
   
    <Navbar/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
