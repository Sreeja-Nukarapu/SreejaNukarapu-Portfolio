import React from "react";

type Props = {
  size?: number;
};

export default function Logo({ size = 52 }: Props) {
  // Maintain aspect ratio: viewBox is 110 x 72
  const width = size * (110 / 72);
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 110 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer thin frame */}
      <rect
        x="1"
        y="1"
        width="108"
        height="58"
        rx="1"
        fill="none"
        stroke="#6B2737"
        strokeWidth="0.8"
      />

      {/* S — large, filled, thin serif weight */}
      <text
        x="12"
        y="50"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="52"
        fontWeight="300"
        fill="#6B2737"
      >
        S
      </text>

      {/* N — large, outline only, overlapping with S */}
      <text
        x="46"
        y="50"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="52"
        fontWeight="300"
        fill="none"
        stroke="#6B2737"
        strokeWidth="1.2"
      >
        N
      </text>

      {/* Thin rule separating monogram from name */}
      <line
        x1="1"
        y1="62"
        x2="109"
        y2="62"
        stroke="#6B2737"
        strokeWidth="0.5"
        opacity="0.5"
      />

      {/* Full name — tiny spaced caps */}
      <text
        x="55"
        y="70"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
        fontSize="6"
        fontWeight="400"
        fill="#6B2737"
        letterSpacing="3"
        textAnchor="middle"
        opacity="0.8"
      >
        SREEJA NUKARAPU
      </text>
    </svg>
  );
}
