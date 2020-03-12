
import request from '../http/request';

export function getCouponList() {
  return request({
    url: '/login',
    method: 'get'
  });
}