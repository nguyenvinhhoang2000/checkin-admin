export const VALIDATION_MESSAGE = {
  ENTER: (type, field) => {
    return `Please ${type} ${field}`;
  },

  INVALID: (field) => {
    return `The input is not valid ${field}!`;
  },

  MIN: (field, min) => {
    return `${field} must be at least ${min} characters`;
  },
  MAX: (field, max) => {
    return `${field} cannot exceed more than ${max} characters`;
  },
};
