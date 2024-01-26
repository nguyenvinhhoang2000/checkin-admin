import { create } from "zustand";

import { storeResult } from "@/utils/store-result";

const useAdminProfileStore = create((set) => ({
  admin: null,

  onGetAdminInfo: async (token) => {
    try {
      set({ admin: token });

      return storeResult.onSuccess("");
    } catch (error) {
      return storeResult.onFail(error.response?.data);
    }
  },

  resetAdminInfo: async () => {
    set({ admin: null });
  },
}));

export default useAdminProfileStore;
