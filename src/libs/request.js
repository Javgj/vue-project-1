import Vue from 'vue'

class Request {
  /**
   *
   * @param {String} path
   * @param {String} method
   * @param {Object} body
   * @param {Boolean} isParams
   * @returns {Promise<{data: Object, success: Boolean, status: number} | {data: Object, success: Boolean, status: number, errors: Object | String}>}
   */
  Send (path, method = 'get', body = {}, isParams = false) {
    try {
      return new Promise((resolve) => {
        Vue.prototype.$http({
          method,
          url: `${Vue.prototype.$http.defaults.baseURL}/${path}`,
          data: (!isParams) ? this.bodyToJsonStringify(body) : {},
          params: this.bodyToParams(body)
        }).then(({ status, data }) => {
          if (status >= 200 && status < 300) {
            return resolve({
              data: (data) ? JSON.parse(data) : null,
              success: true,
              status
            })
          }

          resolve({
            data: null,
            success: false,
            status
          })
        }).catch(err => {
          // console.error(`This is a error: ${err.message}`)
          return resolve({
            data: null,
            success: false,
            error: err.message
          })
        })
      })
    } catch (err) {
      console.error(`This is a error: ${err.message}`)
    }
  }

  /**
   *
   * @param {Object} jsonData
   * @returns {String}
   */
  bodyToJsonStringify (jsonData) {
    return JSON.stringify(jsonData)
  }

  /**
   *
   * @param {Object} jsonData
   * @returns {String}
   */
  bodyToParams (jsonData) {
    return Object.entries(jsonData)
      .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
      .join('&')
  }
}

export const request = new Request()
