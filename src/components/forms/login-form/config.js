import { SCHEMAS } from "@/components/schemas";

const LOGIN_FORM = {
  EMAIL: {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
  },

  PASSWORD: {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
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

const errorLoginNullMessage = [
  {
    name: "email",
    errors: [],
  },
  {
    name: "password",
    errors: [],
  },
];

const loadingLoginMessage = "Login";

const errorCode = { UNAUTHORIZED: 40100 };

export {
  errorLoginNullMessage,
  loadingLoginMessage,
  rulesEmail,
  rulesPassword,
  errorLoginFailMessage,
  errorCode,
  LOGIN_FORM,
};
