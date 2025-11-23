import { cn } from "../lib/utils";
import React, { useMemo } from "react";

export const Meteors = ({ number, className }) => {
  const meteors = useMemo(() => Array.from({ length: number || 10 }, (_, idx) => ({
    id: idx,
    right: Math.floor(Math.random() * 400 - 100) + "px",
    delay: Math.random() * 0.6 + 0.2 + "s",
    duration: Math.floor(Math.random() * 8 + 2) + "s",
  })), [number]);

  return (
    <>
      {meteors.map(({ id, right, delay, duration }) => (
        <span
          key={id}
          className={cn(
            "animate-meteor-effect absolute top-0 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] will-change-transform",
            "before:content-[''] before:fixed before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            right,
            animationDelay: delay,
            animationDuration: duration,
          }}
        ></span>
      ))}
    </>
  );
};