const ENDPOINT = {
  // USER
  LOGIN: "/auth/login",

  // ORGANIZATION
  CREATE_ORGANIZATION: "organizations",
  GET_ORGANIZATION: "organizations",

  // MEMBERS

  GET_MEMBERS: (status, page, limit) =>
    `member?status=${status}&page=${page}&limit=${limit}`,

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

  GET_ABSENT_REQUESTS: (period, page, limit, startDate, endDate) => {
    let params = `limit=${limit}&page=${page}&period=${period}`;
    if (startDate) {
      params += `&startDate=${startDate}`;
    }
    if (endDate) {
      params += `&endDate=${endDate}`;
    }

    return `/admin/absent-requests?${params}`;
  },

  DELETE_ABSENT_REQUEST: (id) => `/admin/absent-requests/${id}`,

  /// MEMBER DETAIL ACTION

  CREATE_MEMBER: "auth/create-member",

  GET_MEMBER: (id) => `member/${id}`,

  EDIT_MEMBER: (id) => `member/${id}`,

  DELETE_MEMBER: (id) => `member/${id}`,

  ACTIVE_MEMBER: (id) => `member/${id}/active`,
};

export default ENDPOINT;
