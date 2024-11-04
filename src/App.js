
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Home } from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';

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
