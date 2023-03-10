import axios from 'axios'
import { showLoadingToast, closeToast } from 'vant'
import 'vant/es/toast/style' // vant-toast样式引入

const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 3000
})

// 在发请求之前拦截
http.interceptors.request.use(function (config) {
  showLoadingToast({
    message: '加载中...',
    forbidClick: true
  })
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 在成功之后拦截
http.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  closeToast()
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default http
