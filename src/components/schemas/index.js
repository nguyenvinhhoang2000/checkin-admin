import { VALIDATION_MESSAGE } from "@/utils/validation_message";

export const INPUT_TYPES = {
  ENTER: "Nhập",
  SELECT: "Chọn",
};
export const RULE_MESSAGE = {
  NAME: {
    name: "name",
    label: "Tên",
    placeholder: "Nhập tên",
  },

  EMAIL: {
    name: "email",
    label: "Email",
    placeholder: "Nhập email",
  },

  BRANCH: {
    name: ["branch", "address"],
    label: "Branch",
    placeholder: "Select branch",
  },

  BRANCH_ADDRESS: {
    name: ["branch", "name"],
    label: "Địa chỉ chi nhánh",
    placeholder: "Nhập địa chỉ chi nhánh",
  },

  ADDRESS: {
    name: "address",
    label: "Địa chỉ",
    placeholder: "Nhập địa chỉ",
  },

  GENDER: {
    name: "gender",
    label: "Giới tính",
    placeholder: "Chọn giới tính",
  },

  POSITION: {
    name: "position",
    label: "Vị trí",
    placeholder: "Nhập vị trí",
  },

  WORK_TIME: {
    name: "workTime",
    label: "Thời gian làm việc",
    placeholder: "Nhập thời gian làm việc",
  },

  WORK_TIME_START: {
    name: "workTimeStart",
    label: "Thời gian bắt đầu làm việc",
    placeholder: "Nhập thời gian bắt đầu làm việc",
  },

  WORK_TIME_END: {
    name: "workTimeEnd",
    label: "Thời gian kết thúc làm việc",
    placeholder: "Nhập thời gian kết thúc làm việc",
  },

  NUMBER_OF_WORKING_DAYS: {
    name: "numberOfWorkingDays",
    label: "Số ngày làm việc trong một tháng",
    placeholder: "Nhập số ngày làm việc trong một tháng",
  },

  IPS: {
    name: "ips",
    label: "IPs",
    placeholder: "Nhập IPs",
  },

  BUSINESS_NAME: {
    name: "businessName",
    label: "Tên doanh nghiệp",
    placeholder: "Nhập tên doanh nghiệp",
  },

  PHONE_NUMBER: {
    name: "phoneNumber",
    label: "Số điện thoại",
    placeholder: "Nhập số điện thoại",
  },

  PASSWORD: {
    name: "password",
    label: "Mật khẩu",
    placeholder: "Nhập mật khẩu",
  },

  NOTE: {
    name: "note",
    label: "Ghi chú",
    placeholder: "Nhập ghi chú",
  },
};

export const SCHEMAS = {
  RULE_REQUIRED_INPUT: (field) => {
    return {
      required: true,
      message: VALIDATION_MESSAGE.ENTER(INPUT_TYPES.ENTER, field),
    };
  },

  RULE_REQUIRED_SELECT: (field) => {
    return {
      required: true,
      message: VALIDATION_MESSAGE.ENTER(INPUT_TYPES.SELECT, field),
    };
  },

  RULE_EMAIL: {
    type: "email",
    message: VALIDATION_MESSAGE.INVALID(RULE_MESSAGE.EMAIL.label),
  },

  RULE_PHONE_NUMBER: {
    type: "string",
    pattern: /^(?:\+84|0)[0-9]{9,}$/,
    message: VALIDATION_MESSAGE.INVALID(RULE_MESSAGE.PHONE_NUMBER.label),
  },

  RULE_MIN: (field, min) => {
    return {
      min,
      message: VALIDATION_MESSAGE.MIN(field, min),
    };
  },

  RULE_MAX: (field, max) => {
    return {
      max,
      message: VALIDATION_MESSAGE.MAX(field, max),
    };
  },
};
