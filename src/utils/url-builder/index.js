class UrlBuilder {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.parameters = []
  }

  queryParameter (key, value) {
    this.parameters.push({ key, value })
    return this
  }

  getUrl() {
    let url = this.baseUrl
    this.parameters.forEach((parameter, index) => {
      const prefix = (index === 0) ? '?' : '&'
      url += `${prefix}${parameter.key}=${parameter.value}`
    })

    return url
  }
}

export default UrlBuilder
