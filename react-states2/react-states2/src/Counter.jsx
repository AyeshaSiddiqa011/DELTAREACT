import { useState, useEffect} from "react"

export default function Counter () {
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount(currCount => currCount + 1)
    }

    useEffect(function printsmthg () {
        console.log("this is sideeffect")
    })
    return(
        <div>
            <h3>Count = {count} </h3>
            <button onClick={incCount}>+1</button>
        </div>
    )
}