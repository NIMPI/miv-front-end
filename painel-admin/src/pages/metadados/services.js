import { httpaxios } from '../../axios/config'

const URI = '/document'

export default {
  salvar: (arquivo) => {
    return httpaxios.post(URI)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }
}
