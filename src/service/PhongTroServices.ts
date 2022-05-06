import apiClient from "./apiClient";

export const PhongTroServices = {
  getAll(params: any) {
    return apiClient.request({
      method: "GET",
      params: params,
      url: "api/v1/phong",
    });
  },

  postRoom(data) {
    return apiClient.request({
      method: "POST",
      data,
      url: "api/v1/phong",
    });
  },

  deleteRoom(id: string) {
    return apiClient.request({
      method: "delete",
      url: "api/v1/phong/" + id,
    });
  },

  addCustomer(data) {
    return apiClient.request({
      method: "POST",
      data,
      url: "api/v1/khachhang",
    });
  },

  updateCustomer(id, data) {
    return apiClient.request({
      method: "put",
      data,
      url: "api/v1/khachhang/" + id,
    });
  },

  checkoutRoom(data) {
    return apiClient.request({
      method: "POST",
      data,
      url: "api/v1/khachhang/traPhong",
    });
  },

  updateRoom(data: any, id: string) {
    return apiClient.request({
      method: "PUT",
      data,
      url: "api/v1/phong/" + id,
    });
  },
};
