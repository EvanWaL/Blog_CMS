import axios from 'axios'
import QS from 'qs'

// // 环境的切换
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = 'https://www.baidu.com'
// } else if (process.env.NODE_ENV === 'debug') {
//   axios.defaults.baseURL = 'https://www.ceshi.com'
// } else if (process.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = 'https://www.production.com'
// }

axios.defaults.timeout = 10000

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          break

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          // 清除token

          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          break

        // 404请求不存在
        case 404:
          break
        // 其他错误，直接抛出错误提示
        default:
      }
      return Promise.reject(error.response)
    }
  }
)

const http = (url = '', method = 'GET', data = {}, config = {}) => {
  return new Promise((resolve, reject) => {
    if (method === 'GET') {
      axios
        .get(url, { params: data }, config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    } else if (method === 'POST') {
      axios
        .post(url, data, config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    } else if (method === 'DELETE') {
      axios
        .delete(url, { params: data }, config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    } else if (method === 'PUT') {
      axios
        .put(url, data, config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    }
  })
}

export default http
