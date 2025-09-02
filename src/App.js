import './App.css';
import About from './Components/About';
import Contect from './Components/Contect';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navebar from './Components/Navebar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans h-screen">
      <Navebar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contect/>
      <Footer/>
    </div>
  );
}

export default App;
