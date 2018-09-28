import UrlBuilder from '../../utils/url-builder'
import { getStringForPoint } from '../../utils/point'

const baseUrl = 'https://optimal-router.herokuapp.com/api/1.0.0'

const getRoutes = async (inputs) => {
  const urlBuilder = new UrlBuilder(`${baseUrl}/short-distance`)
  urlBuilder.queryParameter('origin', getStringForPoint(inputs[0].point))

  for (let index = 1; index < inputs.length; index++) {
    urlBuilder.queryParameter('destination', getStringForPoint(inputs[index].point))
  }

  return fetch(urlBuilder.getUrl())
}

export {
  getRoutes
}
