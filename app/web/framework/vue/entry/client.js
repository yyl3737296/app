import Vue from 'vue';
import { getCookie } from 'framework/utils/utils';
import DataTable from 'component/dataTable';
import Modal from 'component/modal';

export default function(options) {
  const axios = require('axios');
  axios.interceptors.request.use(
    config => {
      const token = getCookie('token_client');
      if (token) {
        config.headers.authorization = token;
      }
      config.headers['x-csrf-token'] = getCookie('csrfToken');
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );
  Vue.component('DataTable', DataTable);
  Vue.component('Modal', Modal);
  Vue.prototype.$http = axios;
  if (options.store) {
    options.store.replaceState(Object.assign({}, window.__INITIAL_STATE__, options.store.state));
  } else if (window.__INITIAL_STATE__) {
    options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data());
  }
  const app = new Vue(options);
  app.$mount('#app');
}
