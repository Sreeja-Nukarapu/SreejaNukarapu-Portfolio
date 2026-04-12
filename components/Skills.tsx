import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";

type Props = {
  skills?: SkillType[];
};

type SkillCategory = {
  label: string;
  icon: string;
  skills: string[];
  accent: string;
};

const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    icon: "{ }",
    skills: ["Python", "Java", "C++", "Bash", "SQL", "Ruby"],
    accent: "#e0f2fe",
  },
  {
    label: "ML Frameworks",
    icon: "🧠",
    skills: ["PyTorch", "TensorFlow", "JAX", "Keras", "HuggingFace", "LangChain"],
    accent: "#fce7f3",
  },
  {
    label: "Deep Learning",
    icon: "⚡",
    skills: ["CNNs", "Transformers", "GANs", "LSTMs", "GNNs", "Diffusion Models"],
    accent: "#fef9c3",
  },
  {
    label: "ML Domains",
    icon: "🔬",
    skills: ["Computer Vision", "NLP", "Medical Imaging", "Time-Series Forecasting"],
    accent: "#dcfce7",
  },
  {
    label: "Backend & APIs",
    icon: "⚙️",
    skills: ["Flask", "FastAPI", "REST API", "Node.js", "React", "Gradio"],
    accent: "#ede9fe",
  },
  {
    label: "Cloud & MLOps",
    icon: "☁️",
    skills: ["AWS SageMaker", "EC2 · S3 · Lambda", "Docker", "CI/CD", "MLflow"],
    accent: "#ffedd5",
  },
  {
    label: "Data & Databases",
    icon: "🗄️",
    skills: ["NumPy", "Pandas", "Matplotlib", "MySQL", "MongoDB"],
    accent: "#f0fdf4",
  },
  {
    label: "Systems & Optimization",
    icon: "🚀",
    skills: ["Distributed Training (DDP)", "GPU Profiling", "FP16 Mixed Precision", "OpenCV", "Git · Linux"],
    accent: "#f1f5f9",
  },
];

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="relative flex flex-col min-h-screen justify-center mx-auto items-center px-6 md:px-20 py-24 max-w-6xl w-full"
    >
      {/* Section Title */}
      <h3 className="absolute top-16 text-2xl font-bold tracking-[10px] text-burgundy uppercase">
        Skills
      </h3>

      {/* Subtitle */}
      <p className="text-gray-400 text-sm mb-10 text-center tracking-wide">
        Full-stack engineering foundation &nbsp;·&nbsp; Deep ML/AI expertise
      </p>

      {/* Skill Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm transition-all duration-300"
          >
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-base w-8 h-8 flex items-center justify-center rounded-lg font-mono font-bold text-gray-700 text-xs"
                style={{ backgroundColor: category.accent }}
              >
                {category.icon}
              </span>
              <h4 className="text-sm font-bold text-black tracking-wide">
                {category.label}
              </h4>
            </div>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, j) => (
                <motion.span
                  key={j}
                  whileHover={{ scale: 1.08, backgroundColor: "#000", color: "#fff" }}
                  transition={{ duration: 0.15 }}
                  className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-full font-medium cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Familiar With */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">
          Also familiar with
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["Apache Spark", "Weights & Biases", "Seaborn", "Ruby on Rails", "JDBC", "Agile / Scrum"].map(
            (skill, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-dashed border-gray-300 text-gray-400 text-xs rounded-full"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
