
// const Skills = () => {
//   return (
//     <div></div>
//   )
// }

// export default Skills

// src/components/Skills.jsx
import { FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { SiFirebase, SiRedux, SiTailwindcss } from "react-icons/si";

const skills = [
  { id: 1, name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={40} /> },
  { id: 2, name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={40} /> },
  { id: 3, name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" size={40} /> },
  { id: 4, name: "ReactJS", icon: <FaReact className="text-cyan-400" size={40} /> },
  { id: 5, name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" size={40} /> },
  { id: 6, name: "Redux", icon: <SiRedux className="text-purple-500" size={40} /> },
  { id: 7, name: "Router", icon: <SiFirebase className="text-yellow-500" size={40} /> },
  { id: 8, name: "GitHub", icon: <FaGithub className="text-gray-300" size={40} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">🛠 Skills</h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
