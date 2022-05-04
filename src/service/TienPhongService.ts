import apiClient from "./apiClient";

export const TienPhongService = {
  getTienPhong() {
    return apiClient.request({
      method: "get",
      url: "api/v1/tienPhong",
    });
  },

  tinhTienPhong(data: any) {
    return apiClient.request({
      method: "put",
      url: "api/v1/tienPhong/tinhTien",
      data: data,
    });
  },
};
