import { useState } from "react"

export default function SetName() {
const [name, setName] = useState("");

return (
<div className="flex justify-center items-center space-x-4">
        <p>Name:</p>
        <input type="text" value={name} className="border-2 rounded-xl p-2"  onChange={(ok) => setName(ok.target.value)} />
        <p>Hi 11v {name === "" ? "suragch" : name} </p>
    </div>
    )   
}