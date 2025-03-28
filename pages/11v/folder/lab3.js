import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [click, setClick] = useState(false);
  const router = useRouter();
  let unen = true;

  return (
    <div className="items-center justify-center min-h-screen ">
      <button className="border-8 border-red-300 text-8xl bg-red-200 text-white rounded-l ml-20" onClick={() => setClick("Erkhes")}>
        Click
      </button>
      <button className="border-8 border-blue-300 text-8xl bg-blue-200 text-white rounded-l ml-4" onClick={() => setClick("")}>
        Click
      </button>
      <p className="text-8xl text-blue-300 ml-20"> {click}</p>

      <button
  className="p-6 bg-transparent border-2 border-white text-white rounded-lg text-xl font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
  onClick={() => router.push('/')}
>
  Return
</button>
    </div>
    
  );
}