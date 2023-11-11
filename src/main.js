const { SERVER_PORT } = require('./config/server')
const app = require('./app')
require('./utils/handle-error')

app.listen(SERVER_PORT, () => {
    console.log('app is running at port 8000')
})