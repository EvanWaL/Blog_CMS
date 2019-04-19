import http from '../http'
import apis from './api.json'

const API = {}

const matchUri = (url, params) => {
  const nurl = url.replace(/\$\w+/g, a => {
    const key = a.slice(1)
    const val = params[key]
    delete params[key]
    return val
  })
  return nurl
}

for (let key of Object.keys(apis)) {
  const { url, method } = apis[key]

  API[key] = (data) => {
    return http(
      url.includes('$') ? matchUri(url, data) : url,
      method,
      data
    )
  }
}

export default API
