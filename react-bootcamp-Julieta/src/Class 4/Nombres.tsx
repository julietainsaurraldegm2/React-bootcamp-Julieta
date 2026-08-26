interface Names {
    id: number;
    name: string;
}

function NameList() {

    const names: Names[] = [
        { id: 1, name: "Juan" },
        { id: 2, name: "Pepe" },
        { id: 3, name: "Mario" }
    ];

    return (
        <ul>
            {names.map((name) => (
            <li key={name.id}>
            {name.name}
            </li>
            ))}
        </ul>
    );
}

export default NameList;