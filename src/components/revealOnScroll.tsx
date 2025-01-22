"use client";
import { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = (element as HTMLElement).getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible((prev) => prev || isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `transition duration-1000
      ${isVisible ? "fade_after" : "fade_before"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};
export default RevealOnScroll;
