"use client";

import { useState, createContext, useContext } from "react";
import LandingPage from "@/components/ui/LandingPage";
import { AnimatePresence } from "motion/react";

interface LandingPageContextType {
  showLanding: boolean;
  hideLanding: () => void;
}

const LandingPageContext = createContext<LandingPageContextType | undefined>(
  undefined
);

export function useLandingPage() {
  const context = useContext(LandingPageContext);
  if (!context) {
    throw new Error("useLandingPage must be used within LandingPageProvider");
  }
  return context;
}

interface LandingPageProviderProps {
  children: React.ReactNode;
}

export function LandingPageProvider({ children }: LandingPageProviderProps) {
  const [showLanding, setShowLanding] = useState(true);

  const hideLanding = () => {
    setShowLanding(false);
  };

  return (
    <LandingPageContext.Provider value={{ showLanding, hideLanding }}>
      {children}
      <AnimatePresence mode="wait">
        {showLanding && <LandingPage onComplete={hideLanding} />}
      </AnimatePresence>
    </LandingPageContext.Provider>
  );
}
