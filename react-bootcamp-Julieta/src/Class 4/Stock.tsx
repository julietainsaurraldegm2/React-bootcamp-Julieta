import { useState } from "react"

function StockWarning(){

    const [stock, setStock] = useState(0)

    function verifyStock(){
        if (stock >5){
            return ("Available")
        }
        else if (stock === 0){
            return("No stock")
        }
        else if (stock <=5){
        return("Last units")
    }
    }

    return(
        <div>
            <h5>
                {verifyStock()}
            </h5>
            <h5>{stock}</h5>
            <button onClick={ () => setStock (stock + 1)}>
                + 
            </button>
            <button onClick={()=> setStock(stock -1)}>
                -
            </button>
        </div>

    )
}
export default StockWarning