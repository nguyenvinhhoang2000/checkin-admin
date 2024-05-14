import { RULE_MESSAGE, SCHEMAS } from "@/components/schemas";

const LOGIN_FORM = {
  EMAIL: RULE_MESSAGE.EMAIL,

  PASSWORD: RULE_MESSAGE.PASSWORD,
};

const rulesEmail = [
  SCHEMAS.RULE_REQUIRED_SELECT(LOGIN_FORM.EMAIL.label),
  SCHEMAS.RULE_EMAIL,
];

const rulesPassword = [
  SCHEMAS.RULE_REQUIRED_SELECT(LOGIN_FORM.PASSWORD.label),
  SCHEMAS.RULE_MIN("Mật khẩu", 6),
  SCHEMAS.RULE_MAX("Mật khẩu", 12),
];

const errorLoginFailMessage = [
  {
    name: "email",
    errors: ["Email không đúng"],
  },
  {
    name: "password",
    errors: ["Mật khẩu không đúng"],
  },
];

const loadingLoginMessage = "Đăng nhập";

const errorCode = { UNAUTHORIZED: 40100 };

export {
  loadingLoginMessage,
  rulesEmail,
  rulesPassword,
  errorLoginFailMessage,
  errorCode,
  LOGIN_FORM,
};
