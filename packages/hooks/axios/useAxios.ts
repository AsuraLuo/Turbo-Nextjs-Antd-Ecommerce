import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface RequestOptions extends AxiosRequestConfig {
  cancel?: any
}

const { CancelToken } = axios

const baseConfig: any = {
  baseURL: '/',
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  params: {},
  data: {},
  timeout: 60 * 1000,
  withCredentials: true,
  responseType: 'json',
  maxContentLength: 2000,
  validateStatus(status: number) {
    return status >= 200 && status < 300
  }
}

const instance: AxiosInstance = axios.create({
  ...baseConfig
})

instance.interceptors.request.use(
  (config) => {
    config.timeout = 60 * 1000
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (res) => {
    const xhr = res.request
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 304) {
        return Promise.resolve(res)
      }
      return Promise.resolve(res)
    }
    return Promise.resolve(xhr)
  },
  (error) => {
    if (error && error.response) {
      const res = {
        code: error.response.status,
        message: error.response
      }
      return Promise.reject(res)
    }
    return Promise.reject(error)
  }
)

export const useAxios = (endpoint: string, options: RequestOptions) => {
  const cancel = options?.cancel ?? {}
  return instance.request({
    url: endpoint,
    ...options,
    cancelToken: new CancelToken((c) => {
      cancel.abort = c
    })
  })
}
