const routes = require('express').Router();
const check = require('../midellwear/auth')

const { adddata, deletedata, finddata, updated } = require('../controllers/usercontrollers')
const imagesuplodes = require('../midellwear/multer')

routes.post('/addrecord',check, imagesuplodes, adddata);
routes.get('/view',check, finddata)
routes.delete('/delete/:id',check, deletedata)
routes.patch('/updated/:id',check,imagesuplodes, updated)

module.exports = routes