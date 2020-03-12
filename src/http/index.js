export function inject(service) {
    // request拦截器
    service.interceptors.request.use(
      config => {
        console.log(config, 'config')
        // 可以进行token验证
        return config;
      },
      error => {
        Promise.reject(error);
      }
    );
    // response拦截器
    service.interceptors.response.use(
      response => {
        console.log(response, 'response')
        // 对返回的数据进行错误码处理
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }
  
  export default inject;
  