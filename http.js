import fly from './fly'
import qs from 'qs'

console.log(process.env.BASE_URL)
const host = process.env.BASE_URL || 'http://127.0.0.1:8000'

/**
 *
 * 用法：
 * 在 页面用引入 test
 * import {test} from '../../http/api.js'
 *
 * test(params).then(res=>{ console.log(res) })
 */

// 通用的get请求
const get = (url, params) => {
  return fly.get(`${host}/${url}`, qs.stringify(params))
}

// 通用的post请求
const post = (url, params) => {
  return fly.post(`${host}/${url}`, qs.stringify(params))
}
// 封装的登录请求，根据后台接收方式选择是否加qs.stringify
const login = (params) => {
  return fly.post('/login', params)
}

export default {
  get,
  post,
  login
}
