import { useEffect, useState } from "react"

interface CuentaRegresivaprop{
    segundosIniciales : number
}
function CuentaRegresiva({segundosIniciales}: CuentaRegresivaprop){
const [segundos, setSegundos] = useState(segundosIniciales)

useEffect(()=>{
const id = setInterval(()=>{
    setSegundos((actual)=>{
        if(actual <= 1){
            clearInterval(id)
            return 0
        }
        return actual -1
    })
},1000)
return () =>clearInterval(id)
}, [])

return(
    <>
    <div>
        <p>{segundos}</p>
    </div>
    </>
)
}
export default CuentaRegresiva;