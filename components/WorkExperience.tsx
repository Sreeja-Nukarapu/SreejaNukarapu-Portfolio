import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col min-h-screen justify-center mx-auto items-center px-6 md:px-20 py-24"
    >
      {/* Title */}
      <h3 className="absolute top-16 text-3xl font-bold text-black tracking-wide">
        My Experience
      </h3>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl mt-10">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

        {experiences?.map((experience, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={experience._id}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-center mb-12 ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div
                className={`w-5/12 ${isLeft ? "mr-auto pr-8" : "ml-auto pl-8"}`}
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <h4 className="text-lg font-bold text-black">
                    {experience?.company}
                  </h4>
                  <p className="text-gray-500 font-medium text-sm mt-1">
                    {experience?.jobTitle}
                  </p>
                  <p className="text-gray-400 text-xs mt-3">
                    {experience?.dateStarted
                      ? new Date(experience.dateStarted).toLocaleDateString(
                          "en-US",
                          { month: "short", year: "numeric" },
                        )
                      : ""}{" "}
                    -{" "}
                    {experience?.isCurrentlyWorkingHere
                      ? "Present"
                      : experience?.dateEnded
                      ? new Date(experience.dateEnded).toLocaleDateString(
                          "en-US",
                          { month: "short", year: "numeric" },
                        )
                      : ""}
                  </p>

                  {/* Points */}
                  <ul className="mt-4 space-y-2">
                    {experience?.points?.map((point, j) => (
                      <li key={j} className="text-gray-600 text-xs flex gap-2">
                        <span className="text-black mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black border-4 border-white shadow" />

              {/* Date on opposite side */}
              <div
                className={`w-5/12 ${
                  isLeft ? "ml-auto pl-8" : "mr-auto pr-8"
                } text-center`}
              >
                <p className="text-gray-400 text-sm font-medium">
                  {experience?.dateStarted
                    ? new Date(experience.dateStarted).toLocaleDateString(
                        "en-US",
                        { month: "short", year: "numeric" },
                      )
                    : ""}{" "}
                  -{" "}
                  {experience?.isCurrentlyWorkingHere
                    ? "Present"
                    : experience?.dateEnded
                    ? new Date(experience.dateEnded).toLocaleDateString(
                        "en-US",
                        { month: "short", year: "numeric" },
                      )
                    : ""}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
