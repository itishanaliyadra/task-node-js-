const routes = require('express').Router();
const { register, logindata, logoutdata, chek } = require('../controllers/admincontrollers')
const check = require('../midellwear/auth')

routes.post('/ragisert_data', register)
routes.post('/login', logindata);
routes.get('/logout',check, logoutdata)
routes.get('/chekdata', chek)

module.exports = routes;