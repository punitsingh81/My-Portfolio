
// const Contect = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Contect

// src/components/Contact.jsx
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">📩 Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Message */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let’s Connect</h3>
            <p className="text-gray-300 mb-6">
              I’m always open to new opportunities, collaborations, or just a friendly chat.  
              Feel free to drop me a message!
            </p>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/punitsingh81"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal-400 text-3xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/punit-shekhawat-2ba73a27a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal-400 text-3xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:punitshekhawat810@gmail.com"
                className="text-gray-300 hover:text-teal-400 text-3xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            action="https://formspree.io/f/xjkewvyv" 
            method="POST"
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-teal-500 rounded-lg hover:bg-teal-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

