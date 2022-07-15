class PhotoController {
  constructor (servicePhoto, photo) {
    this._service = servicePhoto
    this._entity = photo
  }

  getAllPhoto () {
    const response = this._service.getAllTable('photo')
    return response
  }

  createNewPhoto (photo) {
    const newPhoto = new this._entity(photo)
    const response = this._service.save('photo', newPhoto)
    return response
  }

  updatePhoto (photo) {
    const updatePhoto = new this._entity(photo)
    updatePhoto.setId(photo.id)
    const response = this._service.updateTable('photo', updatePhoto)
    return response
  }

  deletePhoto (photo) {
    const response = this._service.deleteItemTable('photo', '_id', photo.id)
    return response
  }
}

export default PhotoController
