

import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95, color: "bg-orange-500" },
  { name: "CSS3", level: 90, color: "bg-blue-500" },
  { name: "JavaScript", level: 85, color: "bg-yellow-400" },
  { name: "ReactJS", level: 88, color: "bg-cyan-400" },
  { name: "Tailwind CSS", level: 92, color: "bg-teal-400" },
  { name: "Node.js", level: 80, color: "bg-green-500" },
  { name: "Express.js", level: 75, color: "bg-gray-400" },
  { name: "MongoDB", level: 70, color: "bg-green-600" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white ">
      <div className="max-w-5xl mx-auto px-6 ">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
          🚀 My Skills
        </h2>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-lg">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                <motion.div
                  className={`h-3 ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

