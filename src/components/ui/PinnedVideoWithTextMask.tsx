"use client";
import { useLayoutEffect, useRef, useId } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDevice } from "@/hooks/useMobile";
gsap.registerPlugin(ScrollTrigger);

export default function PinnedVideoWithTextMask({
  src = "/assets/videos/fruit.mov",
  text = "TON TEXTE",
}: {
  src?: string;
  text?: string | string[];
}) {
  const video = "/assets/videos/food.mp4";
  const device = useDevice();
  const sectionRef = useRef<HTMLDivElement>(null); // wrapper logique
  const pinRef = useRef<HTMLDivElement>(null); // bloc pinné (100vh)
  const maskSvgRef = useRef<SVGSVGElement>(null);
  const maskId = useId(); // id unique pour <mask>

  // Convertir text en array et calculer les positions dynamiquement
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1) PIN de la vidéo pendant 200vh
      ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: "top top",
        end: "+=200%",
        pin: pinRef.current,
        pinSpacing: true,
        anticipatePin: 1,
        pinReparent: false,
        refreshPriority: -1,
        markers: false,
      });

      // 2) Le mask (SVG) monte de 0 → -100% sur la 1ʳᵉ moitié (0 → 100vh)
      gsap.fromTo(
        maskSvgRef.current,
        { yPercent: 0 },
        {
          yPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: "top top",
            end: "+=100%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    // Force un refresh après initialisation
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div className="">
      {/* SECTION logique : le pin gère l’espace (200vh) */}
      <section ref={sectionRef} className="relative">
        {/* Bloc pinné 100vh (⚠️ ne jamais animer ni transformer ce wrapper) */}
        <div
          ref={pinRef}
          className="relative h-screen w-screen overflow-hidden"
        >
          {/* Vidéo plein écran, immobile tant que le pin est actif */}
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
          />

          {/* === Ton MASK SVG au-dessus de la vidéo === */}
          <svg
            ref={maskSvgRef}
            className="absolute left-0 top-0 h-screen w-screen z-10 flex items-center justify-center flex-col"
          >
            <defs>
              <mask id={`textMask-${maskId}`}>
                <rect width="100%" height="100%" fill="white" />
                {textArray.map((textItem, index) => (
                  <text
                    key={index}
                    x="50%"
                    y={`${10 + spacing * (index + 1)}%`}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={getFontSize()}
                    fontWeight="bold"
                    fill="black"
                    letterSpacing="-0.06em"
                  >
                    {textItem.toUpperCase()}
                  </text>
                ))}
              </mask>
            </defs>
            {/* Couleur du voile : change 'white' si tu veux un masque noir, etc. */}
            <rect
              width="100%"
              height="100%"
              fill="white"
              mask={`url(#textMask-${maskId})`}
            />
          </svg>
        </div>
      </section>

      {/* La vidéo est “relâchée” après 200vh, la suite arrive sans blanc */}
    </div>
  );
}
