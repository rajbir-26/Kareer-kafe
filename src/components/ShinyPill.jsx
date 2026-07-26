import React from "react";

export default function ShinyPill({
  text = "Kareer Kafe",
  link,
  textColor = "#A90E02",
  shineColor = "#FF3B30",
  speed = 2,
  className = "",
  style = {},
}) {
  const shellStyle = {
    ...style,
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    whiteSpace: "nowrap",
  };

  const shineLayerStyle = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    color: shineColor,
    pointerEvents: "none",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",
    maskImage:
      "linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",
    WebkitMaskSize: "150% auto",
    maskSize: "150% auto",
    animation: `shinyPillSweep ${speed}s ease-in-out infinite`,
  };

  const content = (
    <div style={shellStyle} className={className}>
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes shinyPillSweep {
            0% { -webkit-mask-position: 200%; mask-position: 200%; }
            100% { -webkit-mask-position: -100%; mask-position: -100%; }
          }`,
        }}
      />
      <span style={{ color: textColor }}>{text}</span>
      <span style={shineLayerStyle} aria-hidden="true">
        {text}
      </span>
    </div>
  );

  if (link) {
    return (
      <a href={link} style={{ textDecoration: "none", display: "inline-flex" }}>
        {content}
      </a>
    );
  }

  return content;
}