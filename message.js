const { $Message } = require('iview-weapp/dist/base/index')

const getParams = (message, duration) => {
  let params = {
    content: message
  }
  if (duration) {
    params.duration = duration
  }
  return params
}

const text = (message, duration) => {
  let params = getParams(message, duration)
  $Message(params)
}

const success = (message, duration) => {
  let params = getParams(message, duration)
  params.type = 'success'
  $Message(params)
}

const error = (message, duration) => {
  let params = getParams(message, duration)
  params.type = 'error'
  $Message(params)
}

const warning = (message, duration) => {
  let params = getParams(message, duration)
  params.type = 'warning'
  $Message(params)
}

export default {
  text,
  success,
  warning,
  error
}
