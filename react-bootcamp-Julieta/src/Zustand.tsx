import { create } from 'zustand'

interface ContadorState {
  contador: number
  incrementar: () => void
}

export const useContadorStore = create<ContadorState>((set) => ({
  contador: 0,
  incrementar: () => set((state) => ({ contador: state.contador + 1 })),
}))


export default useContadorStore