import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  const profilePicUrl = pageInfo?.profilePic
    ? urlFor(pageInfo.profilePic).url()
    : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="relative flex flex-col min-h-screen justify-center mx-auto items-center px-6 md:px-20 py-24 max-w-5xl w-full"
    >
      <h3 className="absolute top-16 text-2xl font-bold tracking-[10px] text-burgundy uppercase">
        About
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
        {/* LEFT — Photo + status */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center lg:items-start gap-6"
        >
          {/* Photo with decorative ring */}
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-burgundy-border via-burgundy-light to-transparent opacity-60" />
            {profilePicUrl ? (
              <Image
                src={profilePicUrl}
                alt="Sreeja Nukarapu"
                width={360}
                height={420}
                className="relative rounded-2xl object-cover object-top shadow-md border border-white"
              />
            ) : (
              <div
                className="relative rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-md border border-white"
                style={{ width: "320px", height: "380px" }}
              >
                <span style={{ fontSize: "130px" }}>👩‍💻</span>
              </div>
            )}
            <div className="absolute -bottom-3 -right-3 bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
              Open to work ✦
            </div>
          </div>

          {/* Currently card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full max-w-xs bg-burgundy-light border border-burgundy-border rounded-2xl p-4"
          >
            <p className="text-xs font-bold text-burgundy tracking-widest uppercase mb-2">
              ✦ Currently
            </p>
            <ul className="space-y-1.5">
              {[
                "Finishing MS CS @ NC State (May 2026)",
                "Exploring LLM agent frameworks",
                "Open to SWE & ML Engineer roles",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-gray-600"
                >
                  <span className="text-burgundy mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* RIGHT — Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-7"
        >
          {/* Heading with highlights */}
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-black leading-snug">
              I build things that{" "}
              <span className="underline decoration-wavy decoration-burgundy underline-offset-4">
                learn,
              </span>{" "}
              <br />
              and things that{" "}
              <span className="underline decoration-wavy decoration-burgundy underline-offset-4">
                ship.
              </span>
            </h4>
          </div>

          {/* Bio paragraphs */}
          <div className="space-y-3 text-gray-500 text-sm leading-relaxed">
            <p>
              I&apos;m a CS grad student at NC State, working at the
              intersection of machine learning research and full-stack
              engineering. My work spans training GANs for medical image
              synthesis to deploying production RAG pipelines that serve real
              users — I care deeply about systems that actually work outside of
              notebooks.
            </p>
            <p>
              I&apos;ve published four peer-reviewed papers across Springer and
              IEEE, hold an AWS ML Engineer certification, and have experience
              across the entire stack — data pipelines, model training, GPU
              optimization, and API deployment.
            </p>
            <p>
              When I&apos;m not at my desk, I&apos;m probably reading about
              diffusion models, contributing to open-source, or figuring out why
              my CUDA kernel is slower than expected.
            </p>
          </div>

          {/* Credentials — clean inline rows */}
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
            {[
              {
                label: "MS CS, NC State",
                detail: "GPA 3.6 · Expected May 2026",
              },
              {
                label: "B.Tech AI/ML, VNR",
                detail: "GPA 3.8 · Graduated with Distinction",
              },
              {
                label: "AWS ML Engineer",
                detail: "Associate Certified · Sep 2025",
              },
              {
                label: "NVIDIA DLI",
                detail: "Deep Learning Certified · Feb 2025",
              },
            ].map(({ label, detail }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.07 }}
                className="flex items-center justify-between text-xs"
              >
                <span className="font-semibold text-black">{label}</span>
                <span className="text-gray-400">{detail}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
