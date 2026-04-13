import React from "react";

type Props = {
  size?: number;
};

export default function Logo({ size = 48 }: Props) {
  const scale = size / 48;

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }}
    >
      {/* Letters row */}
      <div style={{ display: "flex", alignItems: "flex-end", lineHeight: 1 }}>
        {/* S — dominant, large */}
        <span
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "44px",
            fontWeight: 300,
            color: "#6B2737",
            lineHeight: 1,
            letterSpacing: "-2px",
          }}
        >
          S
        </span>

        {/* N — smaller, sits at mid-height of S */}
        <span
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "26px",
            fontWeight: 300,
            color: "#6B2737",
            opacity: 0.55,
            lineHeight: 1,
            marginBottom: "7px",
            marginLeft: "1px",
          }}
        >
          N
        </span>
      </div>

      {/* Hairline rule */}
      <div
        style={{
          width: "100%",
          height: "0.7px",
          backgroundColor: "#6B2737",
          opacity: 0.3,
          marginTop: "3px",
          marginBottom: "4px",
        }}
      />

      {/* Name — tiny tracked caps */}
      <span
        style={{
          fontFamily: "Jost, -apple-system, sans-serif",
          fontSize: "5.5px",
          fontWeight: 500,
          color: "#6B2737",
          letterSpacing: "3.5px",
          opacity: 0.55,
          whiteSpace: "nowrap",
        }}
      >
        SREEJA NUKARAPU
      </span>
    </div>
  );
}
