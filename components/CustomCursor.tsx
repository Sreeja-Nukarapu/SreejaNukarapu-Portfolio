import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 250, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const attachListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    attachListeners();
    // Re-attach on DOM changes (e.g. modal opens)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Star — exact position */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          fontSize: "16px",
          lineHeight: 1,
          color: "#6B2737",
          filter: "drop-shadow(0 0 3px rgba(107,39,55,0.3))",
        }}
        animate={{
          scale: hovering ? 1.6 : 1,
          rotate: hovering ? 20 : 0,
          opacity: hovering ? 0.9 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] select-none"
      >
        ✦
      </motion.div>

      {/* Trailing ring — spring follow */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          backgroundColor: hovering ? "rgba(107,39,55,0.08)" : "transparent",
          opacity: hovering ? 1 : 0.45,
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 rounded-full border border-burgundy pointer-events-none z-[9998]"
      />
    </>
  );
}
