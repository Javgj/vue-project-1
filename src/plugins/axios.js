import { create } from 'axios'

export const http = create({
  baseURL: 'https://rickandmortyapi.com/api',
  url: '',
  method: 'get',
  params: {},
  data: {},
  headers: {
    'Content-Type': 'application/json charset=UTF-8'
  },
  timeout: 0,
  responseType: 'json',
  validateStatus: (status) => status >= 200 && status <= 300,
  transformRequest: [
    (data) => {
      return data
    }
  ],
  transformResponse: [
    (data) => {
      return data
    }
  ]
})
