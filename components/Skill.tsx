import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";

type Props = {
  directionBottom?: boolean;
  skill: Skill;
};

function Skill({ skill, directionBottom }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.15, backgroundColor: "#000000" }}
      className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 cursor-pointer"
    >
      <motion.span
        whileHover={{ color: "#ffffff" }}
        transition={{ duration: 0.2 }}
      >
        {skill?.title}
      </motion.span>
    </motion.div>
  );
}

export default Skill;
