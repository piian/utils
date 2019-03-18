const Promise = require('es6-promise').Promise

const login = () => {
    return new Promise((resolve, reject) => {
        wx.login({
            success: (res) => {
                resolve(res)
            },
            fail: (errors) => {
                reject(errors)
            }
        })
    })
  }

  export default {
    login
  }