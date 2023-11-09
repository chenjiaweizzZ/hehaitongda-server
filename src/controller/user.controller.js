const UserService = require("../service/user.service");
class UserController {
    create(ctx, next) {
        const user = ctx.request.body;
        console.log(user)
        // UserService.create(user)
    }
}

module.exports = new UserController()