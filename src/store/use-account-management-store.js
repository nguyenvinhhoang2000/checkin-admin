import { create } from "zustand";

import adminApi from "@/services/admin-api";
import { storeResult } from "@/utils/store-result";

const useAccountManagementStore = create((set, get) => ({
  status: 1,
  totalAccount: 0,
  listAccount: [],
  limit: 10,
  page: 1,

  isLoadingTable: false,

  onGetListAccount: async () => {
    try {
      const { status, limit, page } = get();

      set({ isLoadingTable: true });
      const {
        data: {
          payload: { total, data },
          message,
        },
      } = await adminApi.getMembers(status, page, limit);

      set({ listAccount: data, totalAccount: total, page });

      return storeResult.onSuccess(message);
    } catch (error) {
      return storeResult.onSuccess(error.response);
    } finally {
      set({ isLoadingTable: false });
    }
  },

  onSetStatus: async (status) => {
    set({ status });
    get().onGetListAccount();
  },
  onSetPage: async (page) => {
    set({ page });
    get().onGetListAccount();
  },

  onResetAccountManagement: async () =>
    set({ status: 1, totalAccount: 0, listAccount: [], limit: 10, page: 1 }),
}));

export default useAccountManagementStore;
