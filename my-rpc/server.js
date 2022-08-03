const express = require('express')
// for development only
// const createRpcPostRoute = require('../../rpc-middleware-npm/index.js')

// FROM NPM
const createRpcPostRoute = require('rpc-middleware')
const fns = require('./server-functions')

const PORT = 8080
const app = express()
app.use(express.json())

app.get('/', (_, res) => res.sendFile(__dirname + '/index.html'))

// This calls: `app.post(route, functionMiddleware)` internally
createRpcPostRoute('/rpc', fns, app)

// FYI: You can create multiple rpc routes for different version of an api
// createRpcPostRoute('/rpc/v2', ver2fns, app)

app.listen(PORT, () => {
	console.log('Server started on port:', PORT)
})
