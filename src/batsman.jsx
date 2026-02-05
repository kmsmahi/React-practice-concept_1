import { useState } from "react"

export default function Batsman(){
    const[count,setCount] = useState(0);
    const[sixes,setsixes] = useState(0);
    const handleSingle=()=>{
        const newCount=count+1;
        setCount(newCount);
    }
    const handleFour=()=>{
        const newCount=count+4;
        setCount(newCount);
    }
    const handleSix=()=>{
        const newCount=count+6;
        const newSixes=sixes+1;
        setCount(newCount);
        setsixes(newSixes);
    }
    return(
        <div className="player">
            <p>Number of sixes: {sixes}</p>
            <h3>Player: Bangladeshi</h3>
            <h2>Score: {count}</h2>
            <button onClick={handleSingle}>single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}