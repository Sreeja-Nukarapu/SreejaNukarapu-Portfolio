import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Project } from "../typings";

type Props = {
  projects?: Project[];
};

type ProjectItem = {
  title: string;
  subtitle: string;
  description: string;
  stat: string;
  statLabel: string;
  tech: string[];
  category: "ML / AI" | "SWE / Backend" | "Full-Stack";
  github: string;
  accent: string;
  accentText: string;
  index: number;
};

const projectData: ProjectItem[] = [
  {
    title: "Hybrid Fusion Model for Brain Tumor Detection",
    subtitle: "CNN–LSTM · BraTS Dataset",
    description:
      "Fused MRI and CT scans via CNN–LSTM architecture. Applied PyTorch DDP and CUDA profiling for 40% training speedup on BraTS benchmark.",
    stat: "95.3%",
    statLabel: "Accuracy",
    tech: ["PyTorch", "CNN–LSTM", "CUDA", "DDP"],
    category: "ML / AI",
    github: "https://github.com/Sreeja-Nukarapu",
    accent: "#6B2737",
    accentText: "#F5EEE6",
    index: 0,
  },
  {
    title: "Image Captioning Service",
    subtitle: "Encoder-Decoder · Live Gradio Demo",
    description:
      "Full 'Show and Tell' pipeline — ResNet-50 encoder + LSTM decoder on 120K MS-COCO images with a live Gradio web API for real-time captions.",
    stat: "0.71",
    statLabel: "BLEU-4",
    tech: ["PyTorch", "ResNet-50", "LSTM", "Gradio"],
    category: "ML / AI",
    github: "https://github.com/Sreeja-Nukarapu",
    accent: "#3D2B4E",
    accentText: "#F5EEE6",
    index: 1,
  },
  {
    title: "Frost Event Prediction",
    subtitle: "LSTM + GNN · NASA POWER Grids",
    description:
      "Hybrid LSTM + GNN model forecasting frost events on NASA POWER climate grids — capturing temporal dynamics and spatial neighbor relationships.",
    stat: "+15%",
    statLabel: "Event Recall",
    tech: ["PyTorch", "LSTM", "GNN", "Time-Series"],
    category: "ML / AI",
    github: "https://github.com/Sreeja-Nukarapu",
    accent: "#1E3A3A",
    accentText: "#E8F5F5",
    index: 2,
  },
  {
    title: "Driver Drowsiness Detection",
    subtitle: "Real-Time CV Safety System",
    description:
      "Real-time fatigue monitor using Eye Aspect Ratio (EAR) with dlib facial landmarks. Multi-modal alerts with 90% accuracy and 70% faster response.",
    stat: "90%",
    statLabel: "Accuracy",
    tech: ["Python", "OpenCV", "dlib", "EAR"],
    category: "ML / AI",
    github: "https://github.com/Sreeja-Nukarapu",
    accent: "#2C3E2D",
    accentText: "#EAF4EA",
    index: 3,
  },
  {
    title: "Expertiza — Open-Source Platform",
    subtitle: "Production · 150k+ LOC",
    description:
      "Contributed to a live production peer-review platform used across universities. Owned full front-end migration from legacy Rails to React in an Agile team.",
    stat: "150k+",
    statLabel: "Lines of Code",
    tech: ["Ruby on Rails", "React", "Docker", "CI/CD"],
    category: "Full-Stack",
    github: "https://github.com/Sreeja-Nukarapu",
    accent: "#2B3A4E",
    accentText: "#E8EFF8",
    index: 4,
  },
  {
    title: "WolfWR Wholesale Store",
    subtitle: "Full-Stack Database System",
    description:
      "Normalized 3NF relational schema for warehouse ops — inventory, suppliers, members. Automated reward logic and dynamic pricing via stored triggers.",
    stat: "3NF",
    statLabel: "Schema",
    tech: ["MySQL", "Java", "JDBC", "Stored Procedures"],
    category: "SWE / Backend",
    github: "https://github.com/Sreeja-Nukarapu",
    accent: "#3D3020",
    accentText: "#F8F0E0",
    index: 5,
  },
];

const filters = ["All", "ML / AI", "Full-Stack", "SWE / Backend"] as const;
type Filter = (typeof filters)[number];

function Projects({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="relative flex flex-col min-h-screen justify-center mx-auto items-center px-6 md:px-20 py-24 max-w-5xl w-full"
    >
      {/* Title */}
      <h3 className="absolute top-16 text-2xl font-bold tracking-[10px] text-burgundy uppercase">
        Projects
      </h3>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap justify-center mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
              activeFilter === f
                ? "bg-burgundy text-cream border-burgundy"
                : "bg-white text-gray-500 border-gray-200 hover:border-burgundy hover:text-burgundy"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <AnimatePresence mode="wait">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Colored header band */}
              <div
                className="relative px-5 pt-5 pb-4 flex items-start justify-between"
                style={{ backgroundColor: project.accent }}
              >
                {/* Stat */}
                <div>
                  <p
                    className="text-3xl font-black leading-none"
                    style={{ color: project.accentText }}
                  >
                    {project.stat}
                  </p>
                  <p
                    className="text-xs mt-0.5 opacity-70"
                    style={{ color: project.accentText }}
                  >
                    {project.statLabel}
                  </p>
                </div>

                {/* Category pill */}
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full border opacity-80"
                  style={{
                    color: project.accentText,
                    borderColor: `${project.accentText}40`,
                  }}
                >
                  {project.category}
                </span>

                {/* Decorative corner block — MINIM touch */}
                <div
                  className="absolute bottom-0 right-0 w-8 h-8 opacity-20 rounded-tl-xl"
                  style={{ backgroundColor: project.accentText }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1.5 text-xs font-semibold mt-1 w-fit"
                  style={{ color: project.accent }}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub →
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Projects;
