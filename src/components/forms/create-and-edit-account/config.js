import { SCHEMAS } from "@/components/schemas";

export const ACCOUNT_FORM = {
  NAME: {
    name: "name",
    label: "Name",
    placeholder: "Enter name",
  },

  BRANCH: {
    name: "branch",
    label: "Branch",
    placeholder: "Select branch",
  },
};

export const RULES = {
  RULE_NAME: [SCHEMAS.RULE_REQUIRED_INPUT(ACCOUNT_FORM.NAME.label)],

  RULE_BRANCH: [SCHEMAS.RULE_REQUIRED_SELECT(ACCOUNT_FORM.BRANCH.label)],
};
