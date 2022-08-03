const express = require('express')
const fns = require('./server-functions')
const createRpcPostRoute = require('rpc-middleware')
// For development, use below instead
// const createRpcPostRoute = require('../../rpc-middleware-npm/index.js')

const PORT = process.env.PORT || 8080 // Using environment variable PORT for heroku environment
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
