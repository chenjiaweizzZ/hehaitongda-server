const { SERVER_PORT } = require('./config/server')
const app = require('./app')

app.listen(SERVER_PORT, () => {
    console.log('app is running at port 8000')
})