import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function SetName() {
const [name, setName] = useState("");
const router = useRouter();

return (
<div className="flex justify-center items-center space-x-4">
        <p>Name:</p>
        <input type="text" value={name} className="border-2 rounded-xl p-2"  onChange={(ok) => setName(ok.target.value)} />
        <p>Hi 11v {name === "" ? "suragch" : name} </p>

        <div className="">
        <button
  className="p-6 bg-transparent border-2 border-white text-white rounded-lg text-xl font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
  onClick={() => router.push('/')}
>
  Return
</button>
        </div>
    </div>
    
    )   
}