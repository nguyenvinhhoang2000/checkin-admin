import { message } from "antd";
import { create } from "zustand";

import { LOCATIONS } from "@/constants/locations";
import adminApi from "@/services/admin-api";

const useAccountManagementStore = create((set, get) => ({
  statusAccount: 1,
  totalAccount: 0,
  listAccount: [],
  limit: 10,
  pageAccount: 1,

  isLoadingTable: false,
  isLoadingForm: false,

  infoMemberPicked: null,

  branches: [],

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

  onShowModalCancel: async () => {
    set({ isShowModalCancel: true });
  },

  onHideModalCancel: async () => {
    set({ isShowModalCancel: false });
  },

  onDeleteMemberAccount: async () => {
    const { onGetListAccount, infoMemberPicked } = get();

    await adminApi.deleteMember(infoMemberPicked._id || infoMemberPicked);

    set({ isShowModalDeleted: false, infoMemberPicked: null });

    message.success("Disabled account successfully");

    await onGetListAccount();
  },

  onGetMemberDetail: async (memberId) => {
    try {
      set({ isLoadingForm: true });

      const memberDetails = await adminApi.getMember(memberId);

      set({
        infoMemberPicked: memberDetails.data.payload,
        isLoadingForm: false,
      });
    } catch (error) {
      console.error("Error fetching member details:", error);
    }
  },

  onGetBranches: async () => {
    try {
      const { data } = await adminApi.getOrganizations();
      set({ branches: data.payload });
    } catch (error) {
      console.error("Error fetching branches:", error);
    }
  },

  onEditMemberAccount: async (id, data, navigate) => {
    try {
      const { onGetListAccount } = get();

      await adminApi.editMember(id, data);

      message.success("Edit saved successfully");

      await onGetListAccount();

      navigate(LOCATIONS.ACCOUNT_MANAGEMENT.path);
    } catch (error) {
      message.error(error.response.data.errors[0].msg);
    }
  },

  onCreateMemberAccount: async (data, navigate) => {
    try {
      const { onGetListAccount } = get();

      await adminApi.createMember(data);

      message.success("Account created successfully");

      await onGetListAccount();

      navigate(LOCATIONS.ACCOUNT_MANAGEMENT.path);
    } catch (error) {
      message.error(error.response.data.errors[0].msg);
    }
  },
}));

export default useAccountManagementStore;
