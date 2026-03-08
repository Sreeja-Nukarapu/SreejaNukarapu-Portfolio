import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  const companyImageUrl = experience?.companyImage
    ? urlFor(experience.companyImage).url()
    : null;

  return (
    <article className="flex flex-col items-center space-y-10 flex-shrink-0 w-[512px] snap-center p-10 overflow-hidden bg-gray-700/50 rounded-lg backdrop-blur-md hover:bg-gray-900/50 hover:backdrop-blur-lg transition-all duration-300">
      <motion.div
        className="w-32 h-32 flex items-center justify-center"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        {companyImageUrl ? (
          <img
            className="w-32 h-32 object-contain"
            src={companyImageUrl}
            alt={experience?.company || "Company"}
          />
        ) : (
          <div className="w-32 h-32 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-4xl">🏢</span>
          </div>
        )}
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.company}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((technology) => {
            const techImageUrl = technology?.image
              ? urlFor(technology.image).url()
              : null;
            return techImageUrl ? (
              <Image
                key={technology._id}
                src={techImageUrl}
                alt={technology.title}
                width={28}
                height={28}
                className="w-7 h-7"
              />
            ) : null;
          })}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {experience?.dateStarted
            ? new Date(experience.dateStarted).toDateString()
            : "Start date"}{" "}
          -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Current"
            : experience?.dateEnded
            ? new Date(experience.dateEnded).toDateString()
            : "End date"}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-h-80 overflow-y-scroll scrollbar-thin">
          {experience?.points?.map((point, i) => <li key={i}>- {point}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
