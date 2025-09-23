import React from "react";

const projects = [
  {
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "IMG",
    link: "#",
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "IMG",
    link: "#",
  },
  // Add more projects as needed
];

const Projects = () => (
  <section className="w-full min-h-screen px-4 md:px-20 py-16">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-16 text-black text-center md:text-left">
      My Projects
    </h1>
    <div className="flex flex-wrap justify-center gap-8">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row bg-gray-200 rounded-xl overflow-hidden shadow-lg max-w-2xl w-full md:w-[600px]"
        >
          <div className="flex items-center justify-center bg-gray-300 w-full md:w-1/2 h-48 md:h-auto">
            <span className="text-5xl font-extrabold text-black">{project.image}</span>
          </div>
          <div className="flex flex-col justify-between p-8 w-full md:w-1/2">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-black">{project.name}</h2>
              <p className="text-black mb-8">{project.description}</p>
            </div>
            <a
              href={project.link}
              className="underline font-semibold text-black hover:text-cyan-600 transition"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;