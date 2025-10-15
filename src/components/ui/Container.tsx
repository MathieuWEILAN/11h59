import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  children: React.ReactNode;
}

export function Container({
  size = "lg",
  className = "",
  children,
  ...props
}: ContainerProps) {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "w-screen",
  };

  const classes = `px-4 sm:px-0 flex flex-col justify-center container mx-auto ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
