const KoaRouter = require('@koa/router')
const UserController = require('../controller/user.controller')
const userRouter = new KoaRouter({ prefix: '/user' })

userRouter.post('/register', (ctx,next) => {
    console.log(ctx.request.body)
})
 
module.exports = userRouter 