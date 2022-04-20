import apiClient from "./apiClient";

export const PhongTroClientService = {
  getPhongTro() {
    return apiClient.request({
      method: "get",
      url: "api/v1/client/phongtro",
    });
  },

  getDetailPhongTro(id: string) {
    return apiClient.request({
      method: "get",
      url: "api/v1/client/phongtro/" + id,
    });
  },
};
