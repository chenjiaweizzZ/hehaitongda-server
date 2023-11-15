const { PUBLIC_KEY } = require("../config/keys/screct");
const UserService = require("../service/user.service");
const jwt = require('jsonwebtoken')

const verifyRegister = async (ctx, next) => {
    const { name, password } = ctx.request.body
        if(!name || !password) {
            return ctx.app.emit('error', -1001, ctx)
        }
        const isUser = await UserService.findUserByUsername(name)
        if(isUser.length) {
            return ctx.app.emit('error', -1002, ctx)
        }
        await next()
}

const verifyLogin = async (ctx, next) => {
    const { name, password } = ctx.request.body
    if(!name || !password) {
        return ctx.app.emit('error', -1001, ctx)
    }
    const users = await UserService.findUserByUsername(name)
    const user = users[0]
    if(!user) {
        return ctx.app.emit('error', -1003, ctx)
    }
    if(user.password !== password) {
        return ctx.app.emit('error', -1004, ctx)
    }
    ctx.user = user
    await next()
}

const verifyAuth = async (ctx, next) => {
    const authorization = ctx.headers.authorization
    if(!authorization) {
        return ctx.app.emit('error',-1005,ctx)
    }
    const token = authorization.replace('Bearer ', '')
    try {
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        })
        ctx.user = result
        await next()
    } catch(error) {
        ctx.app.emit('error',-1005,ctx)
    }
}

module.exports = {
    verifyRegister,
    verifyLogin,
    verifyAuth
}