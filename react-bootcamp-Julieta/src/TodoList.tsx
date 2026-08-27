import { useState } from "react";

interface Tarea {
    id: number;
    texto: string;
    prioridad: string;
    completada: boolean;
}

function Tareas() {

    const [tareas, setTareas] = useState<Tarea[]>([
        {
            id: 1, texto: "Aprender useState", prioridad: "alta", completada: false
        },
        {
            id: 2, texto: "Practicar .map()", prioridad: "media", completada: false
        },
    ]);

    const [textoTarea, setTextoTarea] = useState("");

    function agregarTarea() {
        const nuevaTarea: Tarea = {
            id: Date.now(),
            texto: textoTarea,
            prioridad: "media",
            completada: false,
        };

        setTareas([...tareas, nuevaTarea]);
        setTextoTarea("");
    }

    function eliminarTarea(id: number) {
        setTareas(tareas.filter((t) => t.id !== id));
    }

    function alternarCompletada(id: number) {
        setTareas(
            tareas.map((t) =>
                t.id === id
                    ? { ...t, completada: !t.completada }
                    : t
            ));
    }

    return (
        <>
        <input
            type="text"
            value={textoTarea}
            onChange={(e) => setTextoTarea(e.target.value)}
            placeholder="Escribí una tarea"
            />

        <button onClick={agregarTarea}>
            Agregar tarea
        </button>

           <ul>
            {tareas.map((tarea) => (
                <li key={tarea.id}>
                {tarea.texto}

                <button onClick={() => alternarCompletada(tarea.id)}>
                    {tarea.completada ? "Marcar pendiente": "Completar"}
                </button>

                <button onClick={() => eliminarTarea(tarea.id)}>
                   Eliminar
                </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Tareas;