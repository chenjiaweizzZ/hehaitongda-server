const HomeService = require("../service/home.service");

class HomeController {
    async swiperlist(ctx, next) {
        const result = await HomeService.swiperlist()
        ctx.body = {
            message: "查询成功",
            list: result
        }
    }
    async swiperadd(ctx, next) {
        const result = await HomeService.swiperadd(ctx.request.body.title, ctx.request.body.filename, ctx.user.username)
        ctx.body = {
            message: "新增成功",
            list: result
        }
    }
}

module.exports = new HomeController();