export const LOCATIONS = {
  // LOGIN PAGE
  LOGIN: {
    label: "Login",
    crumb: "Login",
    path: "/",
    routeActive: true,
  },

  // HOME PAGE
  HOME: {
    label: "Trang chủ",
    crumb: "Trang chủ",
    path: "/home",
    routeActive: true,
  },

  // DASHBOARD PAGE
  DASHBOARD: {
    label: "Dashboard",
    crumb: "Dashboard",
    path: "/home/dashboard",
    routeActive: true,
  },

  // CHECK_IN MANAGEMENT PAGE
  CHECK_IN_MANAGEMENT: {
    label: "Quản lý check-in",
    crumb: "Quản lý check-in",
    path: "/home/check-in-management",
    routeActive: false,
  },

  MEMBERS: {
    label: "Danh sách thành viên",
    crumb: "Danh sách thành viên",
    path: "/home/check-in-management/members",
    routeActive: true,
  },

  MEMBER_DETAIL: {
    label: "Chi tiết thành viên",
    crumb: "Chi tiết thành viên",
    path: "/home/check-in-management/members/:id",
    pathWithId: (id) => `/home/check-in-management/members/${id}`,
    routeActive: true,
  },

  TABLE_CHECK_IN: {
    label: "Danh sách check-in",
    crumb: "Danh sách check-in",
    path: "/home/check-in-management/table-check-in",
    routeActive: true,
  },

  ABSENT: {
    label: "Vắng mặt",
    crumb: "Yêu cầu vắng mặt",
    path: "/home/check-in-management/absent",
    routeActive: true,
  },

  // ACCOUNT MANAGEMENT
  ACCOUNT_MANAGEMENT: {
    label: "Quản lý tài khoản",
    crumb: "Quản lý tài khoản",
    path: "/home/account-management",
    routeActive: true,
  },

  CREATE_ACCOUNT: {
    label: "Tạo tài khoản",
    crumb: "Tạo tài khoản",
    path: "/home/account-management/create-account",
    routeActive: true,
  },

  EDIT_ACCOUNT: {
    label: "Edit Account",
    crumb: "Edit Account",
    path: "/home/account-management/edit-account",
    routeActive: true,
  },

  // BUSINESS SETTING
  BUSINESS_SETTING: {
    label: "Cài đặt",
    crumb: "Cài đặt",
    path: "/home/business-setting",
    routeActive: false,
  },

  INFORMATION: {
    label: "Thông tin",
    crumb: "Thông tin",
    path: "/home/business-setting/information",
    routeActive: true,
  },

  // INVALID PAGE
  INVALID: "*",
};
