import message from 'ppiian-utils/message'
import toast from 'ppiian-utils/toast'
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
// 配置请求基地址
// //定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
// //设置超时
fly.config.timeout = 10000
// //设置请求基地址
fly.config.baseURL = process.env.baseURL

// 添加请求拦截器
fly.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  request.headers['X-Tag'] = 'flyio'
  // 打印出请求体
  // console.log(request.body)
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    // 只将请求结果的data字段返回
    console.log(response)
    return response.data
  },
  (err) => {
    if (err.response.data.status_code) {
      let msg = ''
      switch (err.response.data.status_code) {
        case 422:
          for (let field in err.response.data.errors) {
            msg = err.response.data.errors[field][0]
            break
          }
          message.error(msg, 3)
          break

        case 500:
          toast.error('服务器错误!')
          break

        default:
          console.log(err)
          msg = err.response.data.message
          message.error(msg)
          break
      }
    }
    // 发生网络错误后会走到这里
    return err.response
  }
)
// Vue.prototype.$http=fly //将fly实例挂在vue原型上

export default fly
