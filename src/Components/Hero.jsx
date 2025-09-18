  // import { motion } from "framer-motion";
const Hero = () => {
  return (
  
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm Punit Shekhawat👋</h2>
      <p className="mt-4 text-lg md:text-xl text-gray-400">
        A Frontend Developer building modern & responsive web apps
      </p>
      <div className="mt-6 flex space-x-4">
        <a href="#projects" className="px-6 py-2 bg-teal-500 rounded-lg hover:bg-teal-600">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-2 border border-teal-500 rounded-lg hover:bg-teal-500 hover:text-white">
          Contact Me
        </a>
      </div>
    </section>
    
  )
}

export default Hero
