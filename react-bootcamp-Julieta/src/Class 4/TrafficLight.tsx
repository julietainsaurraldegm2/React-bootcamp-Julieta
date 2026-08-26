import { useState } from "react"

function TrafficLight(){

    const [color, setColor] = useState("Red")

    function changeColor(){
        if (color === "Red"){
            setColor("Yellow")
        }
            else if (color === "Yellow"){
            setColor("Green")
        }
           else if (color === "Green"){
            setColor("Red")
        }
    }

    return(
        <div>
            <button onClick={()=> changeColor()}>
                {color === "Red" && "Rojo"}
                {color === "Yellow" && "Amarillo"}
                {color === "Green" && "Verde"}
            </button>
        </div>

    )
}
export default TrafficLight