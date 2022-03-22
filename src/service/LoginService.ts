import apiClient from './apiClient';

export const LoginService = {
  loginAPI(username: string, password: string) {
    const param = { username, password };
    return apiClient.request({
      method: 'post',
      data: param,
      url: 'api/v1/login',
    });
  },

  logoutAPI() {
    localStorage.removeItem('qlnt_data');
  },

  setDataLocalStorage(data: any) {
    localStorage.setItem('qlnt_data', JSON.stringify(data));
  },

  getDataLocalStorage() {
    const data = localStorage.getItem('qlnt_data');
    if (data) return JSON.parse(data);
    return null;
  },
};
