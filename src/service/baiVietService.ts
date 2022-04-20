import apiClient from "./apiClient";

export const BaiVietService = {
  getBaiViet() {
    return apiClient.request({
      method: "get",
      url: "api/v1/baiViet",
    });
  },

  hienBaiViet(id: string) {
    return apiClient.request({
      method: "post",
      url: `api/v1/baiViet/hien/${id}`,
    });
  },

  anBaiViet(id: string) {
    return apiClient.request({
      method: "post",
      url: `api/v1/baiViet/an/${id}`,
    });
  },

  updateBaiViet(data: any, id: string) {
    return apiClient.request({
      method: "put",
      url: `api/v1/baiViet/` + id,
      data,
    });
  },
};
