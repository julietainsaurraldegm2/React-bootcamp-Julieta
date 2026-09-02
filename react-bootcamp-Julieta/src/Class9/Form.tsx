import { useState } from 'react'
import useNombreStore from './useNombreStore'

function Form() {
  const [usuarioLocal, setUsuarioLocal] = useState('')
  const usuario = useNombreStore((state) => state.usuario)
  const login = useNombreStore((state) => state.login)
  const logout = useNombreStore((state) => state.logout)
  const password = useNombreStore((state) => state.password)
  const setPassword = useNombreStore((state) => state.setPassword)

  function manejarSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (usuarioLocal.trim() === '') return
    if (password.trim().length < 6) return
    login(usuarioLocal)
    setUsuarioLocal('')
  }

  return (
    <>
    <p>Hola{usuario}</p>
      {usuario ? (
        <div>
          <button onClick={() => logout()}>Cerrar sesión</button>
        </div>
      ) : (
        <form onSubmit={manejarSubmit}>
          <input
            type="text"
            value={usuarioLocal}
            onChange={(e) => setUsuarioLocal(e.target.value)}
            placeholder="Escribí tu usuario"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Escribí la contraseña"
          />
          <button type="submit" disabled={usuarioLocal.trim() === '' || password.trim().length < 6}>
            Ingresar
          </button>
        </form>
      )}
    </>
  )
}

export default Form