const app = require('../app')

app.on('error', (error, ctx) => {
    let code = 0
    let message = ''
    switch (error) {
        case -1001:
            code = -1001,
            message = '用户名或者密码不能为空'
            break
        case -1002:
            code = -1002,
            message = '用户已存在'
            break
        case -1003:
            code = -1003,
            message = '用户不存在'
            break
        case -1004:
            code = -1004,
            message = '密码输入错误'
            break
        case -1005:
            code = -1005
            message = 'token失效'
            break
    }
    ctx.body = { code, message }
})