import { useContador } from "./ContadorContext"


function Context() {
    const { contador, incrementar, decrementar } = useContador()

    return (
        <div>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
            <p>{contador}</p>
        </div>
    )
}

export default Context