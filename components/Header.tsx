import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { PageInfo, Social } from "../typings";
import Logo from "./Logo";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
};

function Header({ socials, pageInfo }: Props) {
  return (
    <header className="sticky top-0 px-6 py-4 flex items-center justify-between w-full z-20">
      {/* Logo — left */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Logo size={44} />
      </motion.div>

      {/* Socials — right */}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="flex flex-row items-center gap-1"
      >
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            className="hover:scale-125 transition duration-300 ease-in-out"
            fgColor="#6B2737"
            bgColor="transparent"
          />
        ))}
      </motion.div>
    </header>
  );
}

export default Header;
