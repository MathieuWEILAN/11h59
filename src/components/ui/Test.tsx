"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect, forwardRef } from "react";

const One = forwardRef<HTMLDivElement, { boxY: MotionValue<number> }>(
  ({ boxY }, ref) => {
    return (
      <motion.div
        ref={ref}
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          background: "red",
          top: 0,
          zIndex: 1,
          y: boxY,
        }}
      >
        one
      </motion.div>
    );
  }
);
One.displayName = "One";

const Test = () => {
  const { scrollY } = useScroll();
  const boxY = useTransform(
    scrollY,
    [0, window.innerHeight],
    [0, -window.innerHeight]
  );

  const prevRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: prevRef,
    offset: ["1 0", "1 -1"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerHeight]
  );

  return (
    <div className="relative h-[200vh] w-screen bg-blue-500">
      <div
        style={{
          position: "absolute",
          height: "300vh",
          width: "100%",
          overflow: "visible",
        }}
      >
        <div style={{ height: "100vh", position: "fixed", width: "100%" }}>
          <One ref={prevRef} boxY={boxY} />
          <motion.div
            style={{
              background: "green",
              width: "100%",
              height: "200vh",
              translateY: contentY,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            officia non nemo ipsam odio aliquam dolorem, deleniti autem rem
            saepe sequi unde labore laudantium quaerat doloremque blanditiis
            quasi illum inventore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam officia non nemo ipsam odio aliquam dolorem,
            deleniti autem rem saepe sequi unde labore laudantium quaerat
            doloremque blanditiis quasi illum inventore. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ullam officia non nemo ipsam odio
            aliquam dolorem, deleniti autem rem saepe sequi unde labore
            laudantium quaerat doloremque blanditiis quasi illum inventore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            officia non nemo ipsam odio aliquam dolorem, deleniti autem rem
            saepe sequi unde labore laudantium quaerat doloremque blanditiis
            quasi illum inventore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam officia non nemo ipsam odio aliquam dolorem,
            deleniti autem rem saepe sequi unde labore laudantium quaerat
            doloremque blanditiis quasi illum inventore.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ullam officia non nemo ipsam odio
            aliquam dolorem, deleniti autem rem saepe sequi unde labore
            laudantium quaerat doloremque blanditiis quasi illum inventore.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Test;
