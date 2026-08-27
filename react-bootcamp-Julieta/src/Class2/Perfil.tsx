function Perfil(){

    const nombre = "Julieta";
    const bio = "Julieta la volpe haciendo la clase 2 del modulo de React";
    const edad = 18;

    return (
        <div className="content">
            <h1>{nombre}</h1>
            <img className="imagen" src="./public/Chiqui Tapia.jpeg"/>
            <p>{bio}</p>
            <span>{edad} años</span>
        </div>
    )

}

export default Perfil;