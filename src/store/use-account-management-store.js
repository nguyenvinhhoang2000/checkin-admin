import { create } from "zustand";

import adminApi from "@/services/admin-api";

const useAccountManagementStore = create((set, get) => ({
  statusAccount: 1,
  totalAccount: 0,
  listAccount: [],
  limit: 10,
  pageAccount: 1,

  isLoadingTable: false,

  infoMemberPicked: null,

  onGetListAccount: async () => {
    try {
      const { statusAccount, limit, pageAccount } = get();

      set({ isLoadingTable: true });
      const {
        data: {
          payload: { total, data },
        },
      } = await adminApi.getMembers(statusAccount, pageAccount, limit);

      set({
        listAccount: data,
        totalAccount: total,
        isLoadingTable: false,
        pageAccount,
      });
    } catch (error) {
      return;
    } finally {
      set({ isLoadingAbsentTable: false });
    }
  },

  onGetDataFirstRender: async (status, page) => {
    const { statusAccount, pageAccount, onGetListAccount } = get();
    set({
      statusAccount: status || statusAccount,
      pageAccount: page || pageAccount,
    });

    await onGetListAccount();
  },

  onSetStatus: async (statusAccount) => {
    set({ statusAccount });
    await get().onGetListAccount();
  },
  onSetPage: async (pageAccount) => {
    set({ pageAccount });

    await get().onGetListAccount();
  },

  onResetAccountManagement: async () =>
    set({
      statusAccount: 1,
      totalAccount: 0,
      listAccount: [],
      limit: 10,
      pageAccount: 1,
    }),

  onShowModalDeleted: async (record) => {
    set({ isShowModalDeleted: true, infoMemberPicked: record });
  },

  onHideModalDeleted: async () => {
    set({ isShowModalDeleted: false, infoMemberPicked: null });
  },

  onDeleteMemberAccount: async () => {
    const { onGetListAccount, infoMemberPicked } = get();

    console.log(`🚀🚀🚀!..infoMemberPicked:`, infoMemberPicked);
    // const data = adminApi.deleteMember(record._id);

    await onGetListAccount();
  },
}));

export default useAccountManagementStore;
