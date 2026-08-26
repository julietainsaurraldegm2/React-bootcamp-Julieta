interface TarjetaProps{
    nombre: string;
    precio: number;
    stock: number;
}

function Tarjeta({nombre, precio, stock}: TarjetaProps){
    return <div className="Producto">
        <h1>{nombre}</h1>;
        <p>Precio:{precio}</p>;
        <p>stock:{stock}</p>

    </div>
}
export default Tarjeta