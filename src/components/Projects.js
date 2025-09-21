import React, { useState } from "react";
import data from "../data.json";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  // Function to toggle showing more/less projects
  const toggleShowMore = () => {
    if (visibleCount === 8) {
      setVisibleCount(data.projects.length); // Show all
    } else {
      setVisibleCount(8); // Show only 4
    }
  };

  return (
    <div>
      <div className="case-study mt-32 px-4 font-medium place-self-center flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.projects.slice(0, visibleCount).map((project, i) => (
          <a key={i} href={`${project.link}`}>
            <div className="group relative">
              <img
                src={`${process.env.PUBLIC_URL}${project.imgLink}`}
                alt={project.title}
                className="rounded-xl h-96 md:h-[34rem] object-contain md bg-stone-900"
              />
              <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out top-3 left-3 flex gap-2 flex-wrap">
                {project.tech.map((tech, index) => (
                  <p
                    key={index}
                    className="px-4 py-1 rounded-lg bg-orange-50 text-sm font-medium"
                  >
                    {tech}
                  </p>
                ))}
              </div>

              <p className="absolute group-hover:bottom-10 left-3 bottom-3 transition-all duration-300 ease-in-out text-white">
                {project.title}
              </p>
              <p className="absolute opacity-0 group-hover:opacity-100 left-3 bottom-3 transition-all duration-300 ease-in-out text-neutral-400">
                {project.description[0].length > 46
                  ? project.description[0].slice(0, 40) + "..."
                  : project.description[0]}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Only show the button if there are more than 4 projects */}
      {data.projects.length > 8 && (
        <div className="see-more mt-8 flex justify-center">
          <button
            onClick={toggleShowMore}
            className="px-6 py-3 text-sm text-neutral-50 font-medium rounded-3xl bg-neutral-700 hover:bg-neutral-600 transition-colors duration-300"
          >
            {visibleCount === 8 ? "See more" : "See less"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
