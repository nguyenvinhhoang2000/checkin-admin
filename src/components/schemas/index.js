import { VALIDATION_MESSAGE } from "@/utils/validation_message";

export const INPUT_TYPES = {
  ENTER: "enter",
  SELECT: "select",
};
export const RULE_MESSAGE = {
  NAME: {
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
  },

  EMAIL: {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
  },

  BRANCH: {
    name: "branch",
    label: "Branch",
    placeholder: "Enter your branch",
  },

  ADDRESS: {
    name: "address",
    label: "Address",
    placeholder: "Enter your address",
  },

  GENDER: {
    name: "gender",
    label: "Gender",
    placeholder: "Enter your gender",
  },

  POSITION: {
    name: "position",
    label: "Position",
    placeholder: "Enter your position",
  },

  WORK_TIME: {
    name: "workTime",
    label: "Work Time",
    placeholder: "Enter your work time",
  },

  WORK_TIME_START: {
    name: "workTimeStart",
    label: "Work time start",
    placeholder: "Enter your work time start",
  },

  WORK_TIME_END: {
    name: "workTimeEnd",
    label: "Work time end",
    placeholder: "Enter your work time end",
  },

  NUMBER_OF_WORKING_DAYS: {
    name: "numberOfWorkingDays",
    label: "Number of working days in a month",
    placeholder: "Enter your number of working days",
  },

  IPS: {
    name: "ips",
    label: "IPs",
    placeholder: "ips",
  },

  BUSINESS_NAME: {
    name: "businessName",
    label: "Business Name",
    placeholder: "Enter your businessName",
  },

  PHONE_NUMBER: {
    name: "phoneNumber",
    label: "Phone Number",
    placeholder: "Enter your phone number",
  },

  PASSWORD: {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
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

  RULE_PHONENUMBER: {
    type: "string",
    pattern: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
    message: VALIDATION_MESSAGE.INVALID(RULE_MESSAGE.PHONE_NUMBER),
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
