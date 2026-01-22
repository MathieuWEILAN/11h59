"use client";

import { useDevice } from "@/hooks/useMobile";
import { useId } from "react";

const PinnedReveal = () => {
  const text = "MANGEZ SAVOUREZ PARTAGEZ";
  const device = useDevice();
  const textArray = Array.isArray(text) ? text : text.split(" ");
  const textCount = textArray.length;
  const spacing = 80 / (textCount + 1); // Espacement dynamique entre 10% et 90%

 // Fonction pour calculer la taille de police responsive
  const getFontSize = () => {
    const baseFontSize = Math.max(80, 200 - textCount * 20);
    // Réduire la taille selon le device
    switch (device) {
      case "mobile":
        return baseFontSize * 0.5;
      case "tablet":
        return baseFontSize * 0.7;
      case "desktop":
        return baseFontSize;
    }
  };

  return (
    <div>
     <div className="h-screen w-screen text-6xl flex justify-center items-center sticky bottom-0 z-[7]">
      <svg
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-label="Masked text"
      >
        <defs>
          <mask id="text-mask">
            {/* Tout visible */}
            <rect width="100%" height="100%" fill="white" />

            {/* Texte = trou (transparent) */}
         <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fill="black"
          style={{
            fontSize: getFontSize() + "px",
            fontWeight: 800,
            letterSpacing: "-0.06em", // 👈 rapproche les lettres
            fontFamily:
              "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
            transform: "translateY(-1.2em)",
          }}
          >
           <tspan x="50%" dy="0">MANGEZ</tspan>
           <tspan x="50%" dy="0.9em">SAVOUREZ</tspan>
           <tspan x="50%" dy="0.9em">PARTAGEZ</tspan>
          </text>
          </mask>
        </defs>

        {/* Voile plein écran, le texte devient transparent via le mask */}
        <rect width="100%" height="100%" className="fill-white" mask="url(#text-mask)" />
      </svg>

     </div>
     <div className="h-screen w-screen bg-purple-500 text-6xl flex justify-center items-center sticky bottom-0 z-[6]">
      <video
            src={"/assets/videos/fruit.mov"}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
          />
     </div>    
     </div>
  );
};

export default PinnedReveal;