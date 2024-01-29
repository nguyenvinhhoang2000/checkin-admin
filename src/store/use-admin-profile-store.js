import { create } from "zustand";

const useAdminProfileStore = create((set) => ({
  admin: null,

  onGetAdminInfo: async (token) => {
    set({ admin: token });
  },

  resetAdminInfo: async () => {
    set({ admin: null });
  },
}));

export default useAdminProfileStore;
