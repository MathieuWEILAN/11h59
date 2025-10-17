"use client";

import { forwardRef } from "react";

export const Section = forwardRef<
  HTMLElement,
  {
    children: React.ReactNode;
    id: string;
    className?: string;
  }
>(({ children, id, className }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className={`flex flex-col justify-center items-center min-h-screen h-auto z-20 ${className}`}
    >
      {children}
    </section>
  );
});

Section.displayName = "Section";
