import { httpaxios } from '../../axios/config'

export default {
  salvar: (arquivo) => {
    return httpaxios.post('document')
  }
}
