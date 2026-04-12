import React from "react";
import Logo from "./Logo";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "ML Engineer",
      "Deep Learning Researcher",
      "Full-Stack Developer",
      "AWS Certified ML Engineer",
    ],
    loop: true,
    delaySpeed: 2500,
  });

  const heroImageUrl = pageInfo?.heroImage
    ? urlFor(pageInfo.heroImage).url()
    : null;

  const resumeUrl = pageInfo?.resume;

  return (
    <div className="h-screen relative flex flex-col items-center justify-center text-center overflow-hidden w-full bg-cream">
      {/* Watermark logo — bottom left */}
      <div className="absolute bottom-8 left-8 opacity-10">
        <Logo size={48} />
      </div>
      {/* Decorative corner marks */}
      <div className="absolute top-8 right-8 flex flex-col gap-1.5">
        <div className="w-8 h-0.5 bg-burgundy opacity-60" />
        <div className="w-4 h-0.5 bg-burgundy opacity-40" />
      </div>
      {/* Profile Photo */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-4"
      >
        {heroImageUrl ? (
          <Image
            src={heroImageUrl}
            width={160}
            height={160}
            className="rounded-full mx-auto object-cover border-2 border-gray-200 shadow-lg"
            alt={pageInfo?.name || "Sreeja"}
            priority
          />
        ) : (
          <div
            className="rounded-full mx-auto border-2 border-gray-200 shadow-lg bg-gray-100 flex items-center justify-center"
            style={{ width: 160, height: 160 }}
          >
            <span className="text-5xl">👩‍💻</span>
          </div>
        )}
        <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-burgundy flex items-center justify-center text-white text-xs font-bold shadow-md">
          ✦
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl lg:text-5xl font-bold text-black py-2 tracking-tight"
      >
        Hi, I&apos;m {pageInfo?.name || "Sreeja Nukarapu"}
      </motion.h1>

      {/* Typewriter role */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-xl md:text-2xl font-bold text-black py-2"
      >
        <span>{text}</span>
        <Cursor cursorColor="#000000" />
      </motion.h2>

      {/* Status line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-gray-400 text-sm md:text-base max-w-lg mx-auto py-1 tracking-wide"
      >
        MS CS @ NC State &nbsp;·&nbsp; 4× Published Researcher &nbsp;·&nbsp; AWS
        Certified
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="text-gray-600 text-base md:text-lg max-w-xl mx-auto py-2 leading-relaxed"
      >
        Building production-grade ML systems at the intersection of deep
        learning, computer vision, and NLP.
      </motion.p>

      {/* Download CV Button */}
      {resumeUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6"
        >
          <Link href={resumeUrl} target="_blank">
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide flex items-center gap-2 hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default Hero;
