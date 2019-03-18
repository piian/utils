const { $Toast } = require('iview-weapp/dist/base/index')

const getOptions = (options) => {
  if (typeof options === 'string') {
    options = {
      content: options
    }
  }
  return options
}

const text = (message) => {
  let options = getOptions(message)
  $Toast(options)
}

const success = (message) => {
  let options = getOptions(message)
  options.type = 'success'
  $Toast(options)
}

const warning = (message) => {
  let options = getOptions(message)
  options.type = 'warning'
  $Toast(options)
}

const error = (message) => {
  let options = getOptions(message)
  options.type = 'error'
  $Toast(options)
}

const loading = (message) => {
  let options = getOptions(message)
  options.type = 'loading'
  options.mask = false
  $Toast(options)
}

const toast = (options) => {
  $Toast(options)
}

const hide = () => {
  $Toast.hide()
}

export default {
  text,
  success,
  warning,
  error,
  loading,
  toast,
  hide
}
