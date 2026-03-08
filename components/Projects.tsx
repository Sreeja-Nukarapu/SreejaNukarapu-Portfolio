import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  if (!projects || projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen flex flex-col justify-center mx-auto items-center"
      >
        <h3 className="text-3xl font-bold text-black">Projects</h3>
        <p className="text-gray-400 mt-4">Projects coming soon...</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col min-h-screen justify-start mx-auto items-center px-6 md:px-20 py-24 max-w-4xl"
    >
      {/* Title */}
      <h3 className="text-3xl font-bold text-black tracking-wide mb-12">
        My Projects
      </h3>

      {/* Projects list */}
      <div className="flex flex-col gap-8 w-full">
        {projects.map((project, i) => {
          const projectImageUrl = project?.image
            ? urlFor(project.image).url()
            : null;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Project Image */}
                {projectImageUrl && (
                  <div className="flex-shrink-0">
                    <Image
                      src={projectImageUrl}
                      alt={project?.title || "Project"}
                      width={200}
                      height={120}
                      className="rounded-lg object-cover w-full md:w-48"
                    />
                  </div>
                )}

                {/* Project Info */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">
                      {project?.title}
                    </h4>
                    <p className="text-gray-500 text-sm mb-4">
                      {project?.summary}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project?.technologies?.map((tech) => (
                        <span
                          key={tech._id}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                        >
                          {tech.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  {project?.linksToBuild && (
                    <Link href={project.linksToBuild} target="_blank">
                      <button className="flex items-center gap-2 text-sm font-semibold text-black border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 w-fit">
                        View Project →
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;