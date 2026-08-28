import { useEffect, useState } from "react"

interface CuentaRegresivaprop {
    segundosIniciales: number
}
function reiniciarCuenta(){
    localStorage.removeItem("segundos")
}
function CuentaRegresiva({ segundosIniciales }: CuentaRegresivaprop) {

    const [segundos, setSegundos] = useState(() => {
    const guardado = localStorage.getItem("segundos")
        return guardado !== null
            ? Number(guardado)
            : segundosIniciales
    })

    useEffect(() => {
        localStorage.setItem("segundos", String(segundos))
    }, [segundos])
    useEffect(() => {
        const id = setInterval(() => {
            setSegundos((actual) => {
                if (actual <= 1) {
                    clearInterval(id)
                    localStorage.setItem("segundos", "0")
                    return 0
                }
                return actual - 1
            })
        }, 1000)
        return () => clearInterval(id)
    }, [])

    return (
        <div>
            <p>{segundos}</p>
            <button onClick={()=> reiniciarCuenta()} ></button>
        </div>
    )
}

export default CuentaRegresiva