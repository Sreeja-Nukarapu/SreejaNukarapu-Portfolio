import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { PageInfo, Social } from "../typings";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
};

function Header({ socials, pageInfo }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-start mx-auto z-20">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="flex flex-row items-center gap-2"
      >
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            className="hover:scale-125 transition duration-300 ease-in-out cursor-pointer"
            fgColor="#000000"
            bgColor="transparent"
          />
        ))}
      </motion.div>
    </header>
  );
}

export default Header;
