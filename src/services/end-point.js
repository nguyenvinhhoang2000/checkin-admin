const ENDPOINT = {
  // USER
  LOGIN: "/admin/auth/login",

  // ORGANIZATION
  CREATE_ORGANIZATION: "/admin/organizations",
  GET_ORGANIZATION: "/admin/organizations",

  // MEMBERS

  GET_MEMBERS: (status, page, limit) =>
    `/admin/member?status=${status}&page=${page}&limit=${limit}`,

  /// MEMBER DETAIL ACTION

  CREATE_MEMBER: "/admin/member/create",

  GET_MEMBER: (id) => `/admin/member/${id}`,

  EDIT_MEMBER: (id) => `/admin/member/${id}`,

  DELETE_MEMBER: (id) => `/admin/member/${id}`,

  ACTIVE_MEMBER: (id) => `/admin/member/${id}`,
};

export default ENDPOINT;
