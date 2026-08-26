import Saludo from "./Saludo";
import Tarjeta from "./TarjetaProducto";

function Content(){
    return(
        <div>
            <Saludo nombre = {"Jose"}/>
            <Saludo nombre = {"Juli"}/>
            <Tarjeta nombre ={"Macucas"} precio={1200} stock={10000} />
            <Tarjeta nombre={"Pitusas"} precio={900} stock={500}/>
        </div>
    )
}
export default Content