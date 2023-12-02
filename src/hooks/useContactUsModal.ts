import { create } from "zustand";

interface ContactUsModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useContactUsModal = create<ContactUsModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useContactUsModal;
