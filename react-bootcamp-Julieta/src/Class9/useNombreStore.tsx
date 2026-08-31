import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface NombreState {
  usuario: string | null
  login: (usuario: string) => void
  logout: () => void
  password: string
  setPassword: (password: string) => void
}
export const CLAVE_STORAGE ='502032'

const useNombreStore = create<NombreState>()(
  persist(
    (set) => ({
      usuario: null,
      password: '',

      login: (usuario) => set({ usuario, password: '' }),
      logout: () => set({ usuario: null, password: '' }),
      setPassword: (password) => set({ password }),
    }),
    { name: CLAVE_STORAGE }
  )
)

export default useNombreStore