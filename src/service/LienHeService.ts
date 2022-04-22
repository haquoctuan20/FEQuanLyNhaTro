import apiClient from "./apiClient";

export const LienHeService = {
  getListLienHe() {
    return apiClient.request({
      method: "get",
      url: "api/v1/lienHe",
    });
  },

  deleteLienHe(id: string) {
    return apiClient.request({
      method: "delete",
      url: "api/v1/lienHe/" + id,
    });
  },

  xacNhanLienHe(id: string) {
    return apiClient.request({
      method: "post",
      url: "api/v1/lienHe/xacNhan/" + id,
    });
  },
};
