const UserService = require("../service/user.service");
class UserController {
    async create(ctx, next) {
        const user = ctx.request.body;
        const { name, password } = user
        if(!name || !password) {
            ctx.body = {
                code: -1001,
                message: '用户名或密码不能为空'
            }
            return
        }
        const isUser = await UserService.findUserByUsername(name)
        if(isUser.length) {
            ctx.body = {
                code: -1002,
                message: '用户已经存在'
            }
            return
        }
        const result = await UserService.create(user)
        ctx.body = {
            message: '创建用户成功',
            data: result
        }
    }
}

module.exports = new UserController()