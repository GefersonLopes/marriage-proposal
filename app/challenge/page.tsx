"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { trialTexts } from "../utils/trialTexts";

export default function Challenge() {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  const router = useRouter();

  const getRandomPosition = () => {
    if (elementRef.current && count < trialTexts.length - 1) {
      const { offsetWidth, offsetHeight } = elementRef.current;
      const maxX = window.innerWidth - offsetWidth;
      const maxY = window.innerHeight - offsetHeight;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      setPosition({ top: `${randomY}px`, left: `${randomX}px` });
      setCount(count + 1);
    }
  };

  const handleClick = () => {
    getRandomPosition();
    handleNavigate()
  }
  const handleNavigate = () => {
    count === trialTexts.length - 1 && router.push("/result");
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <div
        ref={elementRef}
        className="absolute transition-all duration-300 flex flex-col items-center justify-center"
        style={{
          top: position.top,
          left: position.left,
          transform: count === 0 ? "translate(-50%, -50%)" : "translate(0, 0)",
        }}
      >
        <h1 className="text-center text-6xl md:text-9xl text-[#FF7B5A] w-full">
          {trialTexts[count]}
        </h1>
        <button
          onMouseEnter={getRandomPosition}
          onClick={handleClick}
          className="w-full px-6 py-3 btn-primary text-white font-bold rounded-full shadow-lg hover:bg-orange-500 transition"
        >
          SIM!
        </button>
      </div>
    </section>
  );
}
