import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SetName() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen bg-gray-900 p-6 gap-4 text-white">
      

      <p className="text-lg sm:text-xl font-semibold">Name:</p>

      <input 
        type="text" 
        value={name} 
        className="border-2 border-gray-300 rounded-xl p-3 text-black w-full sm:w-auto"
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name"
      />


      <p className="text-lg sm:text-xl">Hi 11v {name === "" ? "suragch" : name}!</p>


      <button
        className="mt-4 sm:mt-0 p-4 sm:p-6 bg-transparent border-2 border-white text-white rounded-lg text-lg sm:text-xl font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
        onClick={() => router.push('/')}
      >
        Return
      </button>

    </div>
  );
}
