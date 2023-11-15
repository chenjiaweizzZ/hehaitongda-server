const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/user.middleware')
const HomeController = require('../controller/home.controller')
const homeRouter = new KoaRouter({ prefix: '/home' })

homeRouter.get('/listSwiper', verifyAuth, HomeController.swiperlist)
homeRouter.post('/addSwiper', verifyAuth,HomeController.swiperadd)


module.exports = homeRouter