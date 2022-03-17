import axios from 'axios';
import { LoginService } from './LoginService';
// import { authService } from './authService';

const config = {
  api: {
    baseURL: process.env.REACT_APP_BASE_API_URL,
    // timeout: 30000,
    // withCredentials: true
  },
  acceptedFileExtentions: '.png,.docx,.jpg,.jpeg,.pdf,.doc,.xls,.xlsx',
};
const apiClient = axios.create(config.api);

// Request interceptor
apiClient.interceptors.request.use(
  (config: any) => {
    const dataAccount = LoginService.getDataLocalStorage();

    if (dataAccount) {
      config.headers.common.Authorization = `${dataAccount.access_token}`;
    }

    config.headers.common['Content-Type'] = 'application/json';
    config.headers.common['Accept'] = 'application/json';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    if (response.data.code === 11) {
      LoginService.logoutAPI();
      window.location.href = '/login';
    }

    return response;
  },
  (error) => {
    // Clear local storage data and redirect to login page if request is 401 - Unauthorized
    if (error.response.status === 401) {
      LoginService.logoutAPI();
      window.location.href = '/';
    }

    return Promise.reject(error);
  }
);

export default apiClient;
