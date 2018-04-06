import axios from 'axios';
import { message } from 'antd';

// creating the instance
const instance = axios.create();

// Add request headers info
instance.defaults.headers.Accept = 'application/json';
instance.defaults.headers['Content-Type'] = 'application/json';

// const toLogin = () => {
//   window.location.replace('/login');
// };

// Add a request interceptor
instance.interceptors.request.use((config) => {
    // Do something before request is sent
    // const loginKey = window.localStorage.getItem('token') || window.sessionStorage.getItem('token') || '';
    // if(loginKey) {
    //   // eslint-disable-next-line
    //   config.headers.Authorization = `JWT ${loginKey}`;
    // }
    return config;
  // eslint-disable-next-line
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
// eslint-disable-next-line
instance.interceptors.response.use((response) => {
    // Do something with response data
    return response;
  }, (error) => {
    // Do something with response error
    if (error.response && error.response.status === 401) {
      // 在 token 过期、异地登陆、多点登录等需要注销并跳转到登录页面时触发
      // window.localStorage.removeItem('token');
      // window.sessionStorage.removeItem('token');
      // window.localStorage.removeItem('username');
      // window.sessionStorage.removeItem('username');
      // window.localStorage.removeItem('IsSuperuser');
      // window.sessionStorage.removeItem('IsSuperuser');
      // const errorInfo = (error.response.data && error.response.data.detail) || 'unauthorized error';
      // message.error(errorInfo);
      // 等待 2s 后刷新，调整到登录页面
      // window.setTimeout(toLogin, 2000);
    }
    return Promise.reject(error);
  });

export default instance;
