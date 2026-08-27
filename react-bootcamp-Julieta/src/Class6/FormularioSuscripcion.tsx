import React, { useState } from "react";

    function FormularioSuscripcion() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!email) return;

        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div>
                <p>Te suscribiste con {email}.</p>
            </div>
        );
    }

    return (
    <form onSubmit={handleSubmit}>
        <label>
                Email
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                />
            </label>

            <button type="submit">
                Suscribirme
        </button>
    </form>
    );
}
export default FormularioSuscripcion