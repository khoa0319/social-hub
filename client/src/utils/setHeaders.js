/* 3rd party modules */
import axios from "axios"

const setHeaders = (token, fingerprint) => {
  if (axios.defaults.headers.common['Authorization'] && axios.defaults.headers.common['fingerprint']) return

  if (token && fingerprint) {
    axios.defaults.headers.common['Authorization'] = token
    axios.defaults.headers.common['fingerprint'] = fingerprint
  } else {
    delete axios.defaults.headers.common['Authorization']
    delete axios.defaults.headers.common['fingerprint']
  }
}

export default setHeaders;