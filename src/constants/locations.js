export const LOCATIONS = {
  LOGIN: {
    label: "Login",
    crumb: "Login",
    path: "/",
    routeActive: true,
  },

  HOME: {
    label: "Home",
    crumb: "Home",
    path: "/home",
    routeActive: true,
  },

  DASHBOARD: {
    label: "Dashboard",
    crumb: "Dashboard",
    path: "/home/dashboard",
    routeActive: true,
  },

  CHECK_IN_MANAGEMENT: {
    label: "Check-in Management",
    crumb: "Check-in Management",
    path: "/home/check-in-management",
    routeActive: false,
  },

  MEMBERS: {
    label: "Member Overview",
    crumb: "Members",
    path: "/home/check-in-management/members",
    routeActive: true,
  },

  MEMBER_DETAIL: {
    label: "Member Detail",
    crumb: "Member Detail",
    path: "/home/check-in-management/members/:id",
    routeActive: true,
  },

  TABLE_CHECK_IN: {
    label: "Table Check-in",
    crumb: "Table Check-in",
    path: "/home/check-in-management/table-check-in",
    routeActive: true,
  },
  ABSENT: {
    label: "Absent",
    crumb: "Absent",
    path: "/home/check-in-management/absent",
    routeActive: true,
  },

  ACCOUNT_MANAGEMENT: {
    label: "Account Management",
    crumb: "Account Management",
    path: "/home/account-management",
    routeActive: true,
  },

  BUSINESS_SETTING: {
    label: "Business Setting",
    crumb: "Business Setting",
    path: "/home/business-setting",
    routeActive: false,
  },

  INFORMATION: {
    label: "Information",
    crumb: "Information",
    path: "/home/business-setting/information",
    routeActive: true,
  },

  INVALID: "*",
};
