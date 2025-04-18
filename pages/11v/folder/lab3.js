import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [click, setClick] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          className="border-4 sm:border-8 border-red-300 text-4xl sm:text-6xl md:text-8xl bg-red-200 text-white rounded-lg px-6 py-4 w-full sm:w-auto"
          onClick={() => setClick("Erkhes")}
        >
          Click
        </button>

        <button 
          className="border-4 sm:border-8 border-blue-300 text-4xl sm:text-6xl md:text-8xl bg-blue-200 text-white rounded-lg px-6 py-4 w-full sm:w-auto"
          onClick={() => setClick("")}
        >
          Click
        </button>
      </div>


      <p className="text-4xl sm:text-6xl md:text-8xl text-blue-300 text-center mt-6">
        {click}
      </p>


      <button
        className="mt-8 p-4 sm:p-6 bg-transparent border-2 border-white text-white rounded-lg text-lg sm:text-xl font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
        onClick={() => router.push('/')}
      >
        Return
      </button>
    </div>
  );
}
