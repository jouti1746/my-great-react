import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0)

    const handleSingle = () =>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleFour = ()=>{
        const updatedFour = runs + 4;
        setRuns(updatedFour);
    }

    const handleSix = () => {
        const updatedSix = runs + 6;
        setRuns(updatedSix);
    }

    return (
        <div>
          <h3>Player: Bangla Batsman</h3>
          <h1>Runs: {runs}</h1>
             { runs > 50 && alert('you score Half-century')
                
            }


          <button onClick={handleSingle}>Singles</button>
          <button onClick={handleFour}>Four</button>
          <button onClick={handleSix}>Six</button>
        </div>
    )
}