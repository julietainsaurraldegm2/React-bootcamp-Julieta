import { useState } from "react";

interface Name {
    id: number;
    name: string;
}

function AddName() {

    const [names, setNames] = useState<Name[]>([
        { id: 1, name: "Juan" },
        { id: 2, name: "oli" },
        { id: 3, name: "Pepe" },
        { id: 4, name: "Juli" },
        { id: 5, name: "May" },
        { id: 6, name: "Mario" }
    ]);

    const [newName, setNewName] = useState("");

    function agregarNombre() {
        const name: Name = {
            id: Date.now(),
            name: newName
        };

        setNames([...names, name]);
        setNewName("");
    }

    function eliminarNombre(nombre: string) {
        setNames(names.filter((name) => name.name !== nombre));
    }

    return (
        <>
            <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Escribí un nombre"
            />

            <button onClick={agregarNombre}>
            Agregar nombre
            </button>

            <ul>
                {names.map((name) => (
                    <li key={name.id}>
                    {name.name}

                    <button onClick={() => eliminarNombre(name.name)}>
                        Eliminar
                    </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AddName;