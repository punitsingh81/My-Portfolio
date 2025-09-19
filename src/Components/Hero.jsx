  import { motion } from "framer-motion";
  import {Typewriter} from "react-simple-typewriter";
const Hero = () => {
  return (
  
    <motion.section
        initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
    className="h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm Punit Shekhawat 👨‍💻</h2>
      <p className="mt-4 text-lg md:text-xl text-gray-400">
         <Typewriter
            words={["A Frontend Developer building modern & responsive web apps", "Web Developer 💻", "A fullStack Developer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
      </p>
      <div className="mt-6 flex space-x-4">
        <a href="#projects" className="px-6 py-2 bg-teal-500 rounded-lg hover:bg-teal-600">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-2 border border-teal-500 rounded-lg hover:bg-teal-500 hover:text-white">
          Contact Me
        </a>
      </div>
    </motion.section>
    
  )
}

export default Hero
