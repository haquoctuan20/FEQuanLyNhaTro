import apiClient from './apiClient';

export const LoginService = {
  loginAPI(email: string, password: string) {
    const param = { email, password };
    return apiClient.request({
      method: 'post',
      data: param,
      url: '/acc-svc/users/auth/login',
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
