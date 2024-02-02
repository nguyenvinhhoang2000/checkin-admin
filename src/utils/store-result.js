import { message as messageAnt } from "antd";

import { TYPE_MESSAGE } from "@/constants/types-message";

export const storeResult = {
  onSuccess(message) {
    messageAnt.success(message, 1.5);
  },

  onError({ message, errors, code }) {
    messageAnt.error(message, 1.5);

    return { errors, message: message || TYPE_MESSAGE.SYSTEM_ERROR, code };
  },

  onInfo(message) {
    messageAnt.info(message, 1.5);
  },
};
