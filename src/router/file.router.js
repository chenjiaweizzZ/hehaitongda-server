const KoaRouter = require('@koa/router')
const multer = require('@koa/multer')
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
    ctx.body = `文件上传成功`
})

fileRouter.post('/pics', uploadPic.array('pics'), (ctx, next) => {
    console.log(ctx.request.files)
    ctx.body = `文件上传成功`
})

module.exports = fileRouter