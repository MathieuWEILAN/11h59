"use client";

export const Section = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) => {
  return (
    <section
      id={id}
      className={`flex flex-col justify-center items-center min-h-screen h-auto z-20 ${className}`}
    >
      {children}
    </section>
  );
};
