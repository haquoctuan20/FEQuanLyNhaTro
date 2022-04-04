import apiClient from "./apiClient";

export const ToaNhaServices = {
  getAll() {
    return apiClient.request({
      method: "GET",
      url: "api/v1/toaNha",
    });
  },
};
