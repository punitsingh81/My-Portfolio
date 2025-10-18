import {motion} from "framer-motion"
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section
    id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-teal-500 shadow-lg">
          <img
            src="/photo/profile.jpg" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Content */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        className="flex-1">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Hi, I'm <span className="text-teal-400 font-semibold">Punit Shekhawat</span> 👋 , 
            a passionate <span className="text-teal-400 font-semibold">Frontend Developer </span> 
            currently pursuing B.Tech in Computer Science from Rajasthan Technical University (RTU), Kota.  
            {/* I love building modern, responsive web apps using React, Tailwind CSS, and JavaScript.  
            My goal is to craft clean, user-friendly, and efficient digital experiences.  */}

        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
            My core stack is <span className="text-teal-400"><Typewriter words={["ReactJs", "TailwindCSS", "JavaScript","MongoDB","NodeJs,ExpressJs"]} 
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
            /></span>,
            but I am constantly learning and exploring new tools and technologies.  
            Beyond coding, UI/UX design, and creating projects 
            that make a real-world impact.
        </p>
        
          {/* Resume + Contact Buttons */}
        <div className="flex space-x-4">
            <a
            
            href="/photo/punit shekhawat updated resume.pdf" 
            download
            className="px-6 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition"
            >
                Download Resume
            </a>
            <a
            href="#contact"
            className="px-6 py-2 border border-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition"
            >
            Contact Me
            </a>
        </div>
        </motion.div>
    </div>

    {/* Education Section */}
          <div className="max-w-5xl mx-auto px-6 mt-16">
            <h2 className="text-4xl font-semibold mb-4">
              Education
            </h2>
            <div className="space-y-4">
              {/* Degree 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-700 p-4 rounded-lg shadow-md"
              >
                <h4 className="text-lg font-bold">
                  B.Tech in Computer Science and Engineering (AI & DS)
                </h4>
                <p className="text-gray-300">
                  Rajasthan Technical University (RTU), Kota
                </p>
                <p className="text-gray-400 text-sm">2022 – 2026</p>
              </motion.div>

              {/* Degree 2 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-700 p-4 rounded-lg shadow-md"
              >
                <h4 className="text-lg font-bold">Senior Secondary (12th Grade)</h4>
                <p className="text-gray-300">
                  Sarswati Modern Senior Secondary School, Bansur, Alwar, Rajasthan
                </p>
                <p className="text-gray-400 text-sm">Completed in 2022</p>
              </motion.div>

              {/* Degree 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-700 p-4 rounded-lg shadow-md"
              >
                <h4 className="text-lg font-bold">Secondary (10th Grade)</h4>
                <p className="text-gray-300">Sarswati Modern Senior Secondary School, Bansur, Alwar, Rajasthan</p>
                <p className="text-gray-400 text-sm">Completed in 2020</p>
              </motion.div>
            </div>
          </div>
        {/* </motion.div> */}
      {/* // </div> */}
    </section>
    );
};

export default About;

