class PhotoRouter {
  constructor (router, controller, response, httpcode) {
    this._router = router() // Instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpcode = httpcode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/', this.handlePostPhoto.bind(this))
    this._router.get('/', this.handleGetAllPhoto.bind(this))
    this._router.put('/', this.handleUpdatePhoto.bind(this))
    this._router.delete('/', this.handleDeletePhoto.bind(this))
  }

  handlePostPhoto (req, res) {
    const photo = req.body
    console.log(photo)
    const result = this._ctrl.createNewPhoto(photo)
    this._response.succes(req, res, result, this._httpcode.CREATED)
  }

  handleGetAllPhoto (req, res) {
    const result = this._ctrl.getAllPhoto()
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleUpdatePhoto (req, res) {
    const photo = req.body
    const result = this._ctrl.updatePhoto(photo)
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleDeletePhoto (req, res) {
    const photo = req.body
    const result = this._ctrl.deletePhoto(photo)
    this._response.succes(req, res, result, this._httpcode.OK)
  }
}

export default PhotoRouter
