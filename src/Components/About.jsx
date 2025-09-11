

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
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
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Hi, I'm <span className="text-teal-400 font-semibold">Punit Shekhawat</span> 👋 , 
            a passionate <span className="text-teal-400 font-semibold">Frontend Developer</span> 
            currently pursuing B.Tech in Computer Science from Rajasthan Technical University (RTU), Kota.  
            I love building modern, responsive web apps using React, Tailwind CSS, and JavaScript.  
            My goal is to craft clean, user-friendly, and efficient digital experiences. 

        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
            My core stack is <span className="text-teal-400">React, TailwindCSS, and JavaScript</span>, 
            but I am constantly learning and exploring new tools and technologies.  
            Beyond coding, I love problem-solving, UI/UX design, and creating projects 
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
        </div>
    </div>
    </section>
    );
};

export default About;

