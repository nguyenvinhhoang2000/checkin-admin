const ENDPOINT = {
  // USER
  LOGIN: "/admin/auth/login",

  // ORGANIZATION
  CREATE_ORGANIZATION: "/admin/organizations",
  GET_ORGANIZATION: "/admin/organizations",

  // MEMBERS

  GET_MEMBERS: (status, page, limit) =>
    `/admin/member?status=${status}&page=${page}&limit=${limit}`,

  GET_CHECK_IN_MEMBER: (period, page, limit, startDate, endDate) => {
    let params = `limit=${limit}&page=${page}&period=${period}`;
    if (startDate) {
      params += `&startDate=${startDate}`;
    }
    if (endDate) {
      params += `&endDate=${endDate}`;
    }

    return `/admin/working-history?${params}`;
  },

  /// MEMBER DETAIL ACTION

  CREATE_MEMBER: "/admin/member/create",

  GET_MEMBER: (id) => `/admin/member/${id}`,

  EDIT_MEMBER: (id) => `/admin/member/${id}`,

  DELETE_MEMBER: (id) => `/admin/member/${id}`,

  ACTIVE_MEMBER: (id) => `/admin/member/${id}/active`,
};

export default ENDPOINT;
