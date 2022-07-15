import expres from 'express'
import PhotoRouter from './Routes.js'
import PhotoController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import Photo from '../../entity/Photo.js'
// import { DataMongo } from '../../store/DataMongo.js'

export const PhotoModule = () => {
  const servicePhoto = new DataJson()
  // const servicePhoto = new DataMongo()
  const photoController = new PhotoController(servicePhoto, Photo)
  const photoRouter = new PhotoRouter(expres.Router, photoController, response, HttpCode)
  return photoRouter._router
}
