import { useState } from "react"

export default function Counter(){
    const[count,setcount]=useState(0);
    const handleClick=()=>{
        const newCount=count+1;
        setcount(newCount);
    }
    return (
        <div className="cnt">
            <h3>Count: {count}</h3>
            <button onClick={handleClick}>ADD:</button>
        </div>
    )
}