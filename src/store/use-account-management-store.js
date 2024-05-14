import { message } from "antd";
import { create } from "zustand";

import { FILTER_TYPE } from "@/constants/filter-type";
import { LOCATIONS } from "@/constants/locations";
import timeRangeSelection from "@/constants/timeRangeSelection";
import adminApi from "@/services/admin-api";

const useAccountManagementStore = create((set, get) => ({
  statusAccount: "ACTIVE",
  totalAccount: 0,
  listAccount: [],
  limit: 10,
  pageAccount: 1,
  period: FILTER_TYPE.TODAY.key,
  periodAbsent: timeRangeSelection.THIS_MONTH.key,
  startDate: null,
  endDate: null,

  checkInList: [],
  absentRequests: [],

  isLoadingTable: false,
  isLoadingForm: false,

  infoMemberPicked: null,

  infoBusiness: {},

  onGetInfoBusiness: async (data) => {
    try {
      set({ isLoadingTable: true });

      const {
        data: { payload },
      } = await adminApi.getOrganizations(data);

      set({ infoBusiness: payload });
    } catch (error) {
      return;
    } finally {
      set({ isLoadingTable: false });
    }
  },

  onUpdateInfoBusiness: async (data) => {
    try {
      set({ isLoadingTable: true });

      await adminApi.createOrganization(data);

      message.success("Cập nhật thông tin doanh nghiệp thành công");
    } catch (error) {
      return;
    } finally {
      set({ isLoadingTable: false });
    }
  },

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
      statusAccount: "ACTIVE",
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

    message.success("Dừng thành viên thành công");

    await onGetListAccount();
  },

  onActiveMemberAccount: async () => {
    const { onGetListAccount, infoMemberPicked } = get();

    await adminApi.activeMember(infoMemberPicked._id || infoMemberPicked);

    set({ isShowModalActive: false, infoMemberPicked: null });

    message.success("Kích hoạt thành viên thành công");

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

  onEditMemberAccount: async (id, data, navigate) => {
    try {
      const { onGetListAccount } = get();

      await adminApi.editMember(id, data);

      message.success("Chỉnh sửa thành viên thành công");

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

      message.success("Tạo tài khoản thành công");

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
      startDate: null,
      endDate: null,
    }),

  onSetPageTableCheckIn: async (pageAccount) => {
    set({ pageAccount });

    await get().onGetCheckInList();
  },

  onSetDayRangeCheckIn: async () => {
    set({ startDate: null, endDate: null });

    await get().onGetCheckInList();
  },

  onGetAbsentRequests: async () => {
    try {
      const { periodAbsent, limit, pageAccount, startDate, endDate } = get();

      set({ isLoadingTable: true });
      const {
        data: {
          payload: { total, data },
        },
      } = await adminApi.getAbsentRequests(
        periodAbsent,
        pageAccount,
        limit,
        startDate,
        endDate,
      );

      set({
        absentRequests: data,
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

  onGetTableAbsentFirstRender: async (periodTime, page, start, end) => {
    const {
      periodAbsent,
      pageAccount,
      startDate,
      endDate,
      onGetAbsentRequests,
    } = get();
    set({
      periodAbsent: periodTime || periodAbsent,
      pageAccount: page || pageAccount,
      startDate: start || startDate,
      endDate: end || endDate,
    });

    await onGetAbsentRequests();
  },

  onResetAbsentRequests: async () =>
    set({
      totalAccount: 0,
      absentRequests: [],
      limit: 10,
      pageAccount: 1,
      periodAbsent: timeRangeSelection.THIS_MONTH.key,
      startDate: null,
      endDate: null,
    }),

  onSetPageTableAbsent: async (pageAccount) => {
    set({ pageAccount });

    await get().onGetAbsentRequests();
  },

  onSetDayRangeAbsentRequests: async () => {
    set({ startDate: null, endDate: null });

    await get().onGetAbsentRequests();
  },

  onDeleteAbsentRequest: async (_id) => {
    const { onGetAbsentRequests } = get();

    await adminApi.deleteAbsentRequest(_id);

    set({ isShowModalDeleted: false });

    message.success("Deleted absent request successfully");

    await onGetAbsentRequests();
  },
}));

export default useAccountManagementStore;
