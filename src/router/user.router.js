const KoaRouter = require('@koa/router')
const UserController = require('../controller/user.controller')
const { verifyRegister,verifyLogin, verifyAuth } = require('../middleware/user.middleware')
const userRouter = new KoaRouter({ prefix: '/user' })

userRouter.post('/register', verifyRegister, UserController.create)
userRouter.post('/login',verifyLogin,UserController.sign)
userRouter.post('/test',verifyAuth,UserController.test)

 
module.exports = userRouter 