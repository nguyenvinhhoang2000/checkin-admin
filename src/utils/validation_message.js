export const VALIDATION_MESSAGE = {
  ENTER: (type, field) => {
    return `Vui lòng ${type} ${field}`;
  },

  INVALID: (field) => {
    return `${field} không hợp lệ!`;
  },

  MIN: (field, min) => {
    return `${field} tối thiểu ${min} ký tự`;
  },
  MAX: (field, max) => {
    return `${field} không vượt quá ${max} ký tự`;
  },
};
