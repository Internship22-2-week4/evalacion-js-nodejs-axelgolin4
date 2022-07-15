export default class Photo {
  constructor (photo) {
    this._id = null
    this._name = photo.name
    this._date = photo.date
    this._uri = photo.uri
    this._tag = photo.tag
  }

  setId (id) {
    this._id = id
  }
}
