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
  SCHEMAS.RULE_MIN("Password", 6),
  SCHEMAS.RULE_MAX("Password", 12),
];

const errorLoginFailMessage = [
  {
    name: "email",
    errors: ["Email is incorrect"],
  },
  {
    name: "password",
    errors: ["Password is incorrect"],
  },
];

const loadingLoginMessage = "Login";

const errorCode = { UNAUTHORIZED: 40100 };

export {
  loadingLoginMessage,
  rulesEmail,
  rulesPassword,
  errorLoginFailMessage,
  errorCode,
  LOGIN_FORM,
};
