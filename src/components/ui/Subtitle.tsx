import { motion } from "framer-motion";

export const Subtitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <p
      className={`w-fit bg-orange-500 font-semibold text-base mb-4 rounded-full px-4 py-2 text-lg text-white ${className}`}
    >
      {text}
    </p>
  );
};
