
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Home } from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { ThemeProvider } from './theme/themeContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
     <Navbar/>
      <Home/>
      <About/>
     <Skills/> 
     <Project/>
     <Contact/>
     <Toaster
     toastOptions={{
      className: '',
      style: {
      width: '500px',
      height: "100px",
        color: '#713200',
        fontSize: '20px'
      },
    }}
     />
      </ThemeProvider>
    </div>
  );
}

export default App;
