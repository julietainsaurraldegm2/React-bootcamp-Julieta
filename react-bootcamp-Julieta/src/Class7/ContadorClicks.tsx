import { useEffect, useState } from "react";
 
function ContadorClicks(){
   const [count, setCount] = useState(0)

useEffect(()=>{
      document.title = `clickeaste ${count} veces`
},[count]
)
    return(
        <>
        <button onClick={()=> setCount((count)=> count + 1)}>
        {count}
        </button>
        </>
    )
}
export default ContadorClicks