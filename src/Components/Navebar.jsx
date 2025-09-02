
const Navebar = () => {
  return (
     <nav className="fixed top-0 w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold"><a href="/" className="hover:text-teal-400 transition duration-300">&lt;Punit/&gt;</a></h1>
        {/* <h1 className="text-2xl font-bold text-teal-400 hover:text-pink-500 transition duration-300">
  &lt;/punit&gt;
</h1> */}

        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-teal-400 transition duration-300">About</a></li>
          <li><a href="#projects" className="hover:text-teal-400 transition duration-300">Projects</a></li>
          <li><a href="#skills" className="hover:text-teal-400 transition duration-300">Skills</a></li>
          <li><a href="#contact" className="hover:text-teal-400 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navebar