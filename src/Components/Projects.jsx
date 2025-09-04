const projects = [
  {
    id: 0,
    title: "Random Gif Generator",
    description: "A React app that fetches and displays random GIFs using the Giphy API.",
    tech: ["React", "Tailwind", "API"],
    github: "https://github.com/punitsingh81/Random-Gif-Generate",
    demo: "https://random-gif-generate.vercel.app/",
    image: "/photo/random-gif.png", // correct path
  },
  {
    id: 1,
    title: "Weather App",
    description: "A simple weather app that shows real-time weather data using OpenWeather API.",
    tech: ["React", "Tailwind", "API"],
    github: "https://github.com/punitsingh81/weather-app",
    demo: "https://punitsingh81.github.io/Weather-App/",
    image: "/photo/Weather.png", // correct path
  },
  {
    id: 2,
    title: "Tic Tac Toe Game",
    description: "A classic tic tac toe game built with React, featuring two-player gameplay.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/punitsingh81/Tic-Tac-Toe-Game ",
    demo: "https://punitsingh81.github.io/Tic-Tac-Toe-Game/",
    image: "/photo/Tic.png", // correct path
  },
  {
    id: 3,
    title: "Password Generator",
    description: "Generates strong and customizable passwords with options for length & character types.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/punitsingh81/password-generator",
    demo: "https://punitsingh81.github.io/Password-Generator/",
    image: "/photo/Password.png", // correct path
  },
  {
    id: 4,
    title: "GitHub Profile Finder",
    description: "Search and view GitHub user profiles with repos and followers using GitHub API.",
    tech: ["React", "Tailwind", "API"],
    github: "https://github.com/punitsingh81/github-profle-finder",
    demo: "https://punitsingh81.github.io/github-profle-finder/",
    image: "/photo/GitHub.png", // correct path
  },
];

const Projects = () => {
  return (
         <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 underline">PROJECT'S</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover" 
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-sm bg-teal-600 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 border border-teal-500 rounded-lg hover:bg-teal-500 transition"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
