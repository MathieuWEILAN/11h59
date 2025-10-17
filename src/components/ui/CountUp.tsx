import { RefObject, useEffect, useRef, useState } from "react";
import CountUp, { useCountUp } from "react-countup";

export default function LoopingHook({
  start,
  end,
  duration,
}: {
  start: number;
  end: number;
  duration: number;
}) {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      separator=" "
      decimals={0}
      onEnd={() => console.log("Ended! 👏")}
      onStart={() => console.log("Started! 💨")}
    >
      {({ countUpRef, start }) => (
        <div>
          <span ref={countUpRef} />
        </div>
      )}
    </CountUp>
  );
}
