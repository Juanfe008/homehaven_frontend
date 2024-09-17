import { create } from "zustand"

interface ForgetStore {
    isOpen: boolean
    open: () => void
    close: () => void
}

const useForgetModal = create<ForgetStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}))

export default useForgetModal