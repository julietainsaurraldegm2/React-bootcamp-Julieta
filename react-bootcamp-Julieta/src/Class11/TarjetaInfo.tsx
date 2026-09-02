import React from 'react'
import { useToggle } from '@uidotdev/usehooks'

export function TarjetaEjemplo() {
    const [oscuro, setOscuro] = useToggle(false)

    const cardStyle: React.CSSProperties = {
        padding: 16,
        borderRadius: 8,
        background: oscuro ? '#222' : '#fff',
        color: oscuro ? '#fff' : '#000',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        maxWidth: 320,
        marginBottom: 12,
    }

    return (
        <div>
            <div style={cardStyle}>
                <p>Tarjeta {oscuro ? 'Oscuro' : 'Claro'}.</p>
            </div>

            <button onClick={() => setOscuro()}>
                {oscuro ? 'Cambiar a Claro' : 'Cambiar a Oscuro'}
            </button>
        </div>
    )
}

export default TarjetaEjemplo