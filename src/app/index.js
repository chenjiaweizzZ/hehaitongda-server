const Koa = require('koa')
const useRoutes = require('../router')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const cors = require('koa2-cors')


const app = new Koa()


app.use(cors())
app.use(bodyParser())
app.useRoutes = useRoutes
app.useRoutes()
app.use(static('./uploads'))

module.exports = app