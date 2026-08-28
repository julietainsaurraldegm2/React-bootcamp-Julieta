import { createContext, useContext, useState, type ReactNode } from "react"

interface TemaProps{
    tema: string
    cambiar: ()=> void
}
export const TemaContext = createContext<TemaProps | undefined>(undefined)

export function CambiarTema({ children }: { children: ReactNode }) {
    const [tema, setTema] = useState("Claro");
    const cambiar = ()=>{

        if (tema === "Claro"){
            setTema("Oscuro");
            
        }else{
            setTema("Claro")
        }
    
}

  return (
    <>
    <TemaContext.Provider value={{cambiar, tema}}>
    {children}
    </TemaContext.Provider>
    </>
    )
}

export function useTema() {
    const contexto = useContext(TemaContext)
    if (!contexto) {
        throw new Error('useTema debe usarse dentro de un TemaContext.Provider')
}
    return contexto
}