
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
     <Navbar/>
   <Home/>
     <About/>
     <Skills/> 
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
