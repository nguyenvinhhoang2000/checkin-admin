import axiosClient from "./axios-config";
import ENDPOINT from "./end-point";

const adminApi = {
  // LOGIN
  login(value) {
    return axiosClient.post(ENDPOINT.LOGIN, value);
  },

  // ORGANIZATION
  createOrganization(value) {
    return axiosClient.post(ENDPOINT.CREATE_ORGANIZATION, value);
  },

  getOrganizations() {
    return axiosClient.get(ENDPOINT.GET_ORGANIZATION);
  },

  // MEMBERS

  getMembers(status, page, limit) {
    return axiosClient.get(ENDPOINT.GET_MEMBERS(status, page, limit));
  },

  // MEMBER DETAIL ACTION
  createMember(data) {
    return axiosClient.post(ENDPOINT.CREATE_MEMBER, data);
  },

  getMember(id) {
    return axiosClient.get(ENDPOINT.GET_MEMBER(id));
  },

  editMember(id, data) {
    return axiosClient.put(ENDPOINT.EDIT_MEMBER(id), data);
  },

  deleteMember(id) {
    return axiosClient.delete(ENDPOINT.DELETE_MEMBER(id));
  },

  activeMember(id) {
    return axiosClient.put(ENDPOINT.ACTIVE_MEMBER(id));
  },
};

export default adminApi;
