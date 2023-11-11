const { PRIVATE_KEY } = require("../config/keys/screct");
const UserService = require("../service/user.service");
const jwt = require("jsonwebtoken");
class UserController {
    async create(ctx, next) {
        const user = ctx.request.body;
        const result = await UserService.create(user)
        ctx.body = {
            message: '创建用户成功',
            data: result
        }
    }
    async sign(ctx, next) {
        const { id, name } = ctx.user
        const token = jwt.sign({ id, name }, PRIVATE_KEY, { 
            expiresIn: 60 * 60 * 24,
            algorithm: 'RS256'
        })
        ctx.body = {
            code: 0,
            data: {
                token,
                id,
                name
            }
        }
    }
    test(ctx, next) {
        ctx.body = {
            code: 0,
            data: '验证成功'
        }
    }
}

module.exports = new UserController()