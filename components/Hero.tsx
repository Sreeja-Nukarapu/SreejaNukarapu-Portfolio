import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay },
});

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
    <div
      className="min-h-screen relative flex items-center bg-cream overflow-hidden w-full"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Faint background watermark ── */}
      <div
        className="absolute pointer-events-none select-none text-burgundy"
        style={{
          fontSize: "clamp(140px, 20vw, 280px)",
          fontWeight: 900,
          opacity: 0.025,
          top: "50%",
          left: "-1%",
          transform: "translateY(-50%)",
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        SN
      </div>

      {/* ─────────────── LEFT PANEL ─────────────── */}
      <div className="flex-1 flex flex-col justify-center pl-[8vw] pr-8 py-28 z-10 relative">

        {/* Eyebrow — available status */}
        <motion.div {...fadeIn(0.1)} className="flex items-center gap-2.5 mb-8">
          <span
            className="inline-block rounded-full bg-burgundy"
            style={{ width: "6px", height: "6px" }}
          />
          <span
            className="text-burgundy-muted"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Available for full-time roles
          </span>
        </motion.div>

        {/* Name — editorial serif, stacked */}
        <div className="mb-6" style={{ lineHeight: 1 }}>
          <motion.span
            {...fadeUp(0.2)}
            className="block text-black"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(56px, 7.5vw, 96px)",
              fontWeight: 300,
              letterSpacing: "-0.025em",
              display: "block",
            }}
          >
            Sreeja
          </motion.span>
          <motion.span
            {...fadeUp(0.32)}
            className="block"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(56px, 7.5vw, 96px)",
              fontWeight: 300,
              letterSpacing: "-0.025em",
              color: "#6B2737",
              display: "block",
            }}
          >
            Nukarapu<span style={{ color: "#DDB8C0" }}>.</span>
          </motion.span>
        </div>

        {/* Role typewriter */}
        <motion.div {...fadeUp(0.44)} className="flex items-center gap-3 mb-5">
          <div
            className="bg-burgundy rounded-full flex-shrink-0"
            style={{ width: "3px", height: "22px" }}
          />
          <span
            className="text-gray-600"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "clamp(14px, 1.35vw, 17px)",
              letterSpacing: "0.5px",
              fontWeight: 400,
            }}
          >
            {text}
          </span>
          <Cursor cursorColor="#6B2737" />
        </motion.div>

        {/* Bio — punchy, personal */}
        <motion.p
          {...fadeUp(0.54)}
          className="text-gray-500 leading-relaxed mb-9"
          style={{
            maxWidth: "380px",
            fontSize: "clamp(13px, 1.1vw, 15px)",
            fontFamily: "Jost, sans-serif",
            fontWeight: 300,
          }}
        >
          Engineer by training. Researcher by obsession.{" "}
          <br className="hidden lg:block" />I turn complex ML research into
          systems that actually ship — from GAN-based imaging to production RAG
          pipelines.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.64)} className="flex items-center gap-4 mb-9">
          <Link href="#projects">
            <button
              className="bg-burgundy text-cream hover:opacity-90 transition-opacity"
              style={{
                padding: "13px 30px",
                fontSize: "10px",
                letterSpacing: "3px",
                fontFamily: "Jost, sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              View My Work →
            </button>
          </Link>
          <Link href="#contact">
            <button
              className="text-burgundy border border-burgundy hover:bg-burgundy-light transition-colors"
              style={{
                padding: "13px 30px",
                fontSize: "10px",
                letterSpacing: "3px",
                fontFamily: "Jost, sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Get In Touch
            </button>
          </Link>
        </motion.div>

        {/* Credentials row */}
        <motion.div
          {...fadeIn(0.8)}
          className="flex items-center gap-5 flex-wrap"
        >
          {[
            { label: "GitHub", href: "https://github.com/Sreeja-Nukarapu" },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/sreeja-nukarapu",
            },
            ...(resumeUrl ? [{ label: "Resume", href: resumeUrl }] : []),
          ].map((link, i) => (
            <React.Fragment key={link.label}>
              {i > 0 && (
                <span
                  className="text-burgundy-border"
                  style={{ fontSize: "8px" }}
                >
                  ✦
                </span>
              )}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-burgundy transition-colors"
                style={{
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* ─────────────── RIGHT PANEL ─────────────── */}
      <div className="flex-1 hidden lg:flex items-center justify-center relative py-24 pr-[6vw] z-10">

        {/* Dot grid — top right */}
        <div
          className="absolute top-16 right-12 pointer-events-none select-none"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(9, 1fr)",
            gap: "10px",
            opacity: 0.12,
          }}
        >
          {Array.from({ length: 45 }).map((_, i) => (
            <div
              key={i}
              className="rounded-full bg-burgundy"
              style={{ width: "3px", height: "3px" }}
            />
          ))}
        </div>

        {/* Photo composition */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          style={{ isolation: "isolate" }}
        >
          {/* Outer wrapper with slight tilt */}
          <div style={{ transform: "rotate(-1.2deg)" }} className="relative">

            {/* Offset shadow frame — arch shape */}
            <div
              className="absolute bg-burgundy-light"
              style={{
                inset: 0,
                borderRadius: "160px 160px 24px 24px",
                transform: "translate(16px, 16px)",
                zIndex: 0,
                border: "1px solid #DDB8C0",
              }}
            />

            {/* Main photo frame — arch shape */}
            <div
              className="relative overflow-hidden bg-burgundy-light"
              style={{
                width: "clamp(300px, 27vw, 370px)",
                height: "clamp(390px, 35vw, 480px)",
                borderRadius: "160px 160px 24px 24px",
                border: "1.5px solid #DDB8C0",
                zIndex: 1,
              }}
            >
              {heroImageUrl ? (
                <Image
                  src={heroImageUrl}
                  fill
                  className="object-cover object-top"
                  alt="Sreeja Nukarapu"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span style={{ fontSize: "130px" }}>👩‍💻</span>
                </div>
              )}
            </div>

            {/* ✦ corner decorators */}
            {[
              { top: "-12px", left: "-12px" },
              { top: "-12px", right: "-12px" },
              { bottom: "-12px", left: "-12px" },
              { bottom: "-12px", right: "-12px" },
            ].map((pos, i) => (
              <span
                key={i}
                className="absolute text-burgundy"
                style={{
                  ...pos,
                  fontSize: "14px",
                  opacity: 0.5,
                  zIndex: 10,
                  lineHeight: 1,
                }}
              >
                ✦
              </span>
            ))}
          </div>

{/* ── Stats card — Published ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.5 }}
            className="absolute bg-cream border border-burgundy-border shadow-md"
            style={{
              bottom: "40px",
              left: "-40px",
              padding: "14px 20px",
              zIndex: 20,
            }}
          >
            <p
              className="text-burgundy"
              style={{
                fontSize: "32px",
                fontWeight: 900,
                lineHeight: 1,
                fontFamily: "Jost, sans-serif",
              }}
            >
              4×
            </p>
            <p
              className="text-gray-400"
              style={{
                fontSize: "8px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontFamily: "Jost, sans-serif",
                marginTop: "4px",
              }}
            >
              Published
            </p>
          </motion.div>

          {/* ── AWS badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bg-cream border border-burgundy-border shadow-md flex items-center gap-2"
            style={{
              bottom: "-28px",
              right: "-28px",
              padding: "10px 16px",
              zIndex: 20,
            }}
          >
            <span className="text-burgundy" style={{ fontSize: "14px" }}>
              ☁
            </span>
            <div>
              <p
                className="text-burgundy"
                style={{
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "Jost, sans-serif",
                  lineHeight: 1.2,
                }}
              >
                AWS Certified
              </p>
              <p
                className="text-gray-400"
                style={{
                  fontSize: "7px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontFamily: "Jost, sans-serif",
                  marginTop: "2px",
                }}
              >
                ML Specialty
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* NC State label — bottom right */}
        <motion.div
          {...fadeIn(1.3)}
          className="absolute bottom-12 right-8 text-right"
        >
          <p
            className="text-gray-300"
            style={{
              fontSize: "8px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontFamily: "Jost, sans-serif",
            }}
          >
            MS Computer Science
          </p>
          <p
            style={{
              fontSize: "8px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "Jost, sans-serif",
              marginTop: "4px",
              color: "#9B5A67",
              opacity: 0.6,
            }}
          >
            NC State University
          </p>
        </motion.div>
      </div>

      {/* ── Bottom status bar ── */}
      <motion.div
        {...fadeIn(1.4)}
        className="absolute bottom-0 left-0 right-0 border-t border-burgundy-border flex items-center justify-between px-[8vw] py-3 z-10"
      >
        <span
          className="text-gray-300"
          style={{
            fontSize: "8.5px",
            letterSpacing: "3.5px",
            textTransform: "uppercase",
            fontFamily: "Jost, sans-serif",
          }}
        >
          ✦ Raleigh, NC · Open to relocation
        </span>
        <div className="flex items-center gap-4">
          {["Deep Learning", "Computer Vision", "NLP"].map((tag, i) => (
            <React.Fragment key={tag}>
              {i > 0 && (
                <span className="text-gray-200" style={{ fontSize: "8px" }}>
                  ·
                </span>
              )}
              <span
                className="text-gray-300"
                style={{
                  fontSize: "8.5px",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                {tag}
              </span>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
