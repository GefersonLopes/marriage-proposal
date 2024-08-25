"use client";

import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Challenge() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {showConfetti && <Confetti width={width} height={height} />}
      <h1 className="text-center text-6xl md:text-9xl text-[#FF7B5A] w-full">
        Casados! 😝
      </h1>
    </div>
  );
}
