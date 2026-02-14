
// const Footer = () => {
//   return (
//     <div></div>
//   )
// }

// export default Footer

// src/components/Footer.jsx
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white cursor-pointer hover:text-teal-400 transition duration-300">&lt;punit/&gt;</h2>
          <p className="text-sm text-gray-400">
            Made with ⚡ using React & Tailwind
          </p>
        </div>

        {/* Middle - Resume Link */}
        <div className="mb-4 md:mb-0">
          <a
            href="/photo/ResumePunit1.pdf" 
            download
            className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Right side - Social Links */}
        <div className="flex space-x-6">
          <a 
            href="https://github.com/punitsingh81" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaGithub size={22} />
          </a>
          <a 
            href="https://www.linkedin.com/in/punit-shekhawat-2ba73a27a/" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a 
            href="https://www.instagram.com/rinku_rajputtt?igsh=MTBobGJzYmk4ZXJlcw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Punit Shekhawat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
