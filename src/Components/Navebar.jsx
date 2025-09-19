
import {useState} from "react";
const Navebar = () => {
  const [menuOpen,setMenuOpen] =useState(false);
  return (
     <nav className="fixed top-0 w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold"><a href="/#" className="hover:text-teal-400 transition duration-300">&lt;Punit/&gt;</a></h1>
        

        <ul className=" hidden md:flex space-x-6">
          <li><a href="#about" className="hover:text-teal-400 transition duration-300">About</a></li>
          <li><a href="#projects" className="hover:text-teal-400 transition duration-300">Projects</a></li>
          <li><a href="#skills" className="hover:text-teal-400 transition duration-300">Skills</a></li>
          <li><a href="#contact" className="hover:text-teal-400 transition duration-300">Contact</a></li>
        </ul>
        <button className="md:hidden text-teal-100"
        onClick={()=>setMenuOpen(!menuOpen)}
        aria-label="Toggle menu" >
          <svg width="24" height="24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
 
  
        </button>
      
      </div>
      {
        menuOpen && (
        <div className="md:hidden mr-1">
          <ul className="flex flex-row gap-4  mx-auto  py-1 px-4 ">
            <li><a href="#about" className="hover:text-teal-400 transition duration-300 p-1  border border-teal-500 rounded-lg" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" className="hover:text-teal-400 transition duration-300 p-1 border border-teal-500 rounded-lg" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" className="hover:text-teal-400 transition duration-300 p-1 border border-teal-500 rounded-lg" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" className="hover:text-teal-400 transition duration-300 p-1 border border-teal-500 rounded-lg" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
        )
      }
    </nav>
  )
    
  
}

export default Navebar