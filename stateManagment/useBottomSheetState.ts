import { create } from "zustand";

interface BottomSheetState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const useBottomSheetState = create<BottomSheetState>()((set) => ({
  isOpen: false,
  setIsOpen: (val) => set(() => ({ isOpen: val })),
}));

export default useBottomSheetState;
