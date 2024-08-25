"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/challenge");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col">
        <h1 className="text-center text-6xl md:text-9xl text-[#FF7B5A] -mb-20">
          Quer Casar Comigo?
        </h1>
        <h1 className="text-center text-6xl md:text-9xl text-[#FF7B5A] -mb-20 opacity-50">
          Quer Casar Comigo?
        </h1>
        <h1 className="text-center text-6xl md:text-9xl text-[#FF7B5A] opacity-25">
          Quer Casar Comigo?
        </h1>
      </div>

      <div className="mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          className="w-32 h-32 mb-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </div>
      <button onClick={handleClick} className="btn-primary">
        SIM!
      </button>
    </div>
  );
}
