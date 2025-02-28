/* eslint-disable no-undef */
import { create } from "zustand";

import adminApi from "@/services/admin-api";
import {
  removeAppAccessToken,
  setAppAccessToken,
} from "@/services/axios-config";
import { storeResult } from "@/utils/store-result";

import useAdminProfileStore from "./use-admin-profile-store";
import useAppMounted from "./use-app-mounted";

const useAuthStore = create((set) => ({
  isLoadingLogin: false,

  onLogin: async (data) => {
    try {
      set({ isLoadingLogin: true });
      const {
        data: { payload: token, message },
      } = await adminApi.login(data);

      setAppAccessToken(token);

      await useAdminProfileStore.getState().onGetAdminInfo(token);

      return storeResult.onSuccess(message);
    } catch (error) {
      return storeResult.onError(error.response?.data);
    } finally {
      set({ isLoadingLogin: false });
    }
  },

  onLogout: async () => {
    // REMOVE TOKEN
    removeAppAccessToken();

    // RESET ADMIN INFO
    await useAdminProfileStore.getState().resetAdminInfo();

    // USER LOGOUT (MAKE SURE NO REDIRECT)
    await useAppMounted.getState().onSetForceLogout(true);
  },
}));

export default useAuthStore;
