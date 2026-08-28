import { useState } from "react";
import { useTema } from "./TemaContext"



function Context() {
    const {tema, cambiar} = useTema()

    return (
        <div className={tema}>
    <button onClick={cambiar}>
        {cambiar? 'Claro' : 'Oscuro'}
      </button>           
        </div>
    )
}

export default Context