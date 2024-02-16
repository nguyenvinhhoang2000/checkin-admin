import { VALIDATION_MESSAGE } from "@/utils/validation_message";

export const INPUT_TYPES = {
  ENTER: "enter",
  SELECT: "select",
};
export const RULE_MESSAGE = {
  NAME: {
    name: "name",
    label: "Name",
    placeholder: "Enter name",
  },

  EMAIL: {
    name: "email",
    label: "Email",
    placeholder: "Enter email",
  },

  BRANCH: {
    name: ["branch", "address"],
    label: "Branch",
    placeholder: "Select branch",
  },

  ADDRESS: {
    name: "address",
    label: "Address",
    placeholder: "Enter address",
  },

  GENDER: {
    name: "gender",
    label: "Gender",
    placeholder: "Select gender",
  },

  POSITION: {
    name: "position",
    label: "Position",
    placeholder: "Enter position",
  },

  WORK_TIME: {
    name: "workTime",
    label: "Work Time",
    placeholder: "Enter work time",
  },

  WORK_TIME_START: {
    name: "workTimeStart",
    label: "Work time start",
    placeholder: "Enter work time start",
  },

  WORK_TIME_END: {
    name: "workTimeEnd",
    label: "Work time end",
    placeholder: "Enter work time end",
  },

  NUMBER_OF_WORKING_DAYS: {
    name: "numberOfWorkingDays",
    label: "Number of working days in a month",
    placeholder: "Enter number of working days",
  },

  IPS: {
    name: "ips",
    label: "IPs",
    placeholder: "ips",
  },

  BUSINESS_NAME: {
    name: "businessName",
    label: "Business Name",
    placeholder: "Enter businessName",
  },

  PHONE_NUMBER: {
    name: "phoneNumber",
    label: "Phone",
    placeholder: "Enter phone number",
  },

  PASSWORD: {
    name: "password",
    label: "Password",
    placeholder: "Enter password",
  },

  NOTE: {
    name: "note",
    label: "Note",
    placeholder: "Enter your note",
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
