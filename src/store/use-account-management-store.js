import { message } from "antd";
import { create } from "zustand";

import { FILTER_TYPE } from "@/constants/filter-type";
import { LOCATIONS } from "@/constants/locations";
import adminApi from "@/services/admin-api";

const useAccountManagementStore = create((set, get) => ({
  statusAccount: 1,
  totalAccount: 0,
  listAccount: [],
  limit: 10,
  pageAccount: 1,

  checkInList: [],
  period: FILTER_TYPE.TODAY.key,
  startDate: null,
  endDate: null,

  branches: [],

  isLoadingTable: false,
  isLoadingForm: false,

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
      set({ isLoadingTable: false });
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

  onShowModalActive: async () => {
    set({ isShowModalActive: true });
  },

  onHideModalActive: async () => {
    set({ isShowModalActive: false });
  },

  onShowModalAbsentRequest: async () => {
    set({ isShowModalAbsentRequest: true });
  },

  onHideModalAbsentRequest: async () => {
    set({ isShowModalAbsentRequest: false });
  },

  onDeleteMemberAccount: async () => {
    const { onGetListAccount, infoMemberPicked } = get();

    await adminApi.deleteMember(infoMemberPicked._id || infoMemberPicked);

    set({ isShowModalDeleted: false, infoMemberPicked: null });

    message.success("Disabled account successfully");

    await onGetListAccount();
  },

  onActiveMemberAccount: async () => {
    const { onGetListAccount, infoMemberPicked } = get();

    await adminApi.activeMember(infoMemberPicked._id || infoMemberPicked);

    set({ isShowModalActive: false, infoMemberPicked: null });

    message.success("Activated account successfully");

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

  onClearMemberDetail: async () => {
    set({ infoMemberPicked: null });
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

  onGetCheckInList: async () => {
    try {
      const { period, limit, pageAccount, startDate, endDate } = get();

      set({ isLoadingTable: true });
      const {
        data: {
          payload: { total, data },
        },
      } = await adminApi.getCheckInMember(
        period,
        pageAccount,
        limit,
        startDate,
        endDate,
      );

      set({
        checkInList: data,
        totalAccount: total,
        isLoadingTable: false,
        pageAccount,
      });
    } catch (error) {
      return;
    } finally {
      set({ isLoadingTable: false });
    }
  },

  onGetTableCheckInFirstRender: async (periodTime, page, start, end) => {
    const { period, pageAccount, startDate, endDate, onGetCheckInList } = get();
    set({
      period: periodTime || period,
      pageAccount: page || pageAccount,
      startDate: start || startDate,
      endDate: end || endDate,
    });

    await onGetCheckInList();
  },

  onResetTableCheckIn: async () =>
    set({
      totalAccount: 0,
      checkInList: [],
      limit: 10,
      pageAccount: 1,
      period: FILTER_TYPE.TODAY.key,
    }),

  onSetPageTableCheckIn: async (pageAccount) => {
    set({ pageAccount });

    await get().onGetCheckInList();
  },
}));

export default useAccountManagementStore;
