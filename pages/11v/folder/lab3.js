import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);
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
    </div>
  );
}