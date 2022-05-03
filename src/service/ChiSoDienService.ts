import apiClient from "./apiClient";

export const ChiSoDienService = {
  getListPhongTro(data: any) {
    return apiClient.request({
      method: "get",
      url: "api/v1/phong/chiSoDien?dangThue=" + data,
      data,
    });
  },

  saveSoDien(data: any) {
    return apiClient.request({
      method: "post",
      url: "api/v1/phong/luuSoDien",
      data: data,
    });
  },
};
