import React from "react";
import { motion } from "framer-motion";

type EduItem = {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
  details: string[];
  icon: string;
  badge: string | null;
  badgeLink: string | null;
};

const educationData: EduItem[] = [
  {
    degree: "Master of Computer Science",
    school: "North Carolina State University",
    location: "Raleigh, NC",
    period: "Aug 2024 – Expected May 2026",
    details: [
      "Advanced Machine Learning",
      "Deep Learning",
      "Distributed Systems",
      "Database Systems",
    ],
    icon: "🎓",
    badge: null,
    badgeLink: null,
  },
  {
    degree: "B.Tech in Computer Science (AIML)",
    school: "VNR Vignana Jyothi Inst. of Eng. & Tech.",
    location: "Hyderabad, India",
    period: "Aug 2020 – May 2024",
    details: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Structures",
      "Computer Networks",
    ],
    icon: "🎓",
    badge: null,
    badgeLink: null,
  },
];

const certificationData: EduItem[] = [
  {
    degree: "AWS Certified Machine Learning Engineer",
    school: "Amazon Web Services",
    location: "",
    period: "Sep 2025",
    gpa: "",
    details: ["Associate Level Certification"],
    icon: "☁️",
    badge:
      "https://images.credly.com/size/680x680/images/1a634b4e-3d6b-4a74-b118-c0dcb429e8d2/image.png",
    badgeLink:
      "https://www.credly.com/badges/c8069aa1-19b6-48f5-86fc-97a4f1c12361",
  },
  {
    degree: "NVIDIA DLI: Getting Started with Deep Learning",
    school: "NVIDIA",
    location: "",
    period: "Feb 2025",
    gpa: "",
    details: ["Deep Learning Fundamentals", "Neural Networks"],
    icon: "🤖",
    badge: null,
    badgeLink: null,
  },
];

function EduCard({ edu, i }: { edu: EduItem; i: number }) {
  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start gap-3 mb-3">
        {edu.badge ? (
          <a href={edu.badgeLink as string} target="_blank" rel="noreferrer">
            <img
              src={edu.badge}
              alt="Badge"
              width={60}
              height={60}
              className="rounded-lg hover:scale-110 transition-transform duration-300"
            />
          </a>
        ) : (
          <span className="text-3xl">{edu.icon}</span>
        )}
        <div>
          <h4 className="text-base font-bold text-black">{edu.degree}</h4>
          <p className="text-sm font-medium text-gray-500">{edu.school}</p>
          {edu.location && (
            <p className="text-xs text-gray-400 mt-1">📍 {edu.location}</p>
          )}
        </div>
      </div>

      <p className="text-xs text-gray-400 mb-2">🗓 {edu.period}</p>

      {edu.gpa && (
        <p className="text-xs font-semibold text-gray-600 mb-3">{edu.gpa}</p>
      )}

      <div className="flex flex-wrap gap-2">
        {edu.details.map((d, j) => (
          <span
            key={j}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
          >
            {d}
          </span>
        ))}
      </div>

      {edu.badgeLink && (
        <a
          href={edu.badgeLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-xs text-gray-400 hover:text-black transition-colors duration-300"
        >
          🔗 Verify Certificate
        </a>
      )}
    </motion.div>
  );
}

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col min-h-screen justify-center mx-auto items-center px-6 md:px-20 py-24 max-w-5xl"
    >
      <h3 className="absolute top-16 text-2xl font-bold tracking-[10px] text-burgundy uppercase">
        Education
      </h3>

      {/* Degrees */}
      <div className="w-full mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, i) => (
            <EduCard key={i} edu={edu} i={i} />
          ))}
        </div>

        {/* Certifications sub-section */}
        <div className="mt-10">
          <h4 className="text-sm font-bold tracking-[8px] text-burgundy uppercase mb-5 flex items-center gap-3">
            <span className="w-5 h-0.5 bg-burgundy opacity-50 inline-block" />
            Certifications
            <span className="w-5 h-0.5 bg-burgundy opacity-50 inline-block" />
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationData.map((cert, i) => (
              <EduCard key={i} edu={cert} i={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
