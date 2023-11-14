const KoaRouter = require('@koa/router')
const multer = require('@koa/multer')
const { IP_ADDRESS } = require('../config/server')
const fileRouter = new KoaRouter({ prefix: '/file' })

const uploadPic = multer(
    {
        storage: multer.diskStorage({
            destination(req, file, callback) {
                callback(null, './uploads')
            },
            filename(req, file, callback) {
                callback(null, Date.now() + '_' + file.originalname)
            }
        })
    },
)

fileRouter.post('/pic', uploadPic.single('pic'), (ctx, next) => {
    console.log(ctx.request.file)
    ctx.body = {
       code: 0,
       message: `文件上传成功`,
       file: IP_ADDRESS + ctx.request.file.filename
    }
})

fileRouter.post('/pics', uploadPic.array('pics'), (ctx, next) => {
    console.log(ctx.request.files)
    ctx.body = `文件上传成功`
})

module.exports = fileRouter