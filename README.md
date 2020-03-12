# axios封装在项目中使用

 ## 封装在http目录，入口为request


import axios from 'axios';
import { inject } from './index.js';
import Config from '../config';

const service = axios.create({
  baseURL: Config.unionService, // api的base_url
  timeout: 20000 // 请求超时时间
});

inject(service);

export default service;

## 调用inject方法，对axios的请求以及相应进行拦截处理

## 使用是在api目录下

