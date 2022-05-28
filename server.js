const {apiMountFactory} = require('api-mount-server')
var cors = require('cors')

const ApiMount = apiMountFactory({
	beforeListen: (app) => app.use(cors()),
})

const api = {
	...require('./server-funcs'),
}

ApiMount.exposeApi(api)
