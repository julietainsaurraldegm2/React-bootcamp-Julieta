import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);
    
    return(
        <div>
            <button onClick={ () => setCount (count + 1)}>
                + 
            </button>

            <button onClick={()=> setCount(count -1)}>
                -
            </button>
            <h5>{count}</h5>
        </div>

    )

}
export default Counter
