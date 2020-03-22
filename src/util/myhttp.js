import axios from 'axios'

// 请求拦截器
axios.interceptors.request.use(config => {
  console.log('-----------------------------> axios request interceptor')
  config.headers.common.Accept = 'application/json'
  console.log('url: ', config.url)
  console.log('method: ', config.method)
  console.log('headers: ', config.headers)
  console.log('-----------------------------> axios request interceptor')
  return config
}, error => {
  console.log('axios request interceptor error: ', error)
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(config => {
  console.log('<<<----------------------------- axios response interceptor')
  console.log('data: ', config.data)
  console.log('headers: ', config.headers)
  console.log('<<<----------------------------- axios response interceptor')
  return config
}, error => {
  console.log('<<<----------------------------- axios response interceptor', error.config)
  return Promise.reject(error)
})
