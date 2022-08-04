module.exports.test = () => 'works!'

// string as parameter
module.exports.yoy = (message) => {
	return message + ' from server..'
}

// object as parameter
module.exports.cat = (body) => {
	const {say} = body
	return 'Cat says:' + say + '!!'
}

// multiple parameter
module.exports.love = (name1, name2) => {
	return `God loves: ${name1} and ${name2}`
}

// on error rpc send status: 400 (BAD REQUEST) and body as `err`
module.exports.rain = (name1, name2) => {
	const messg = `${name1} does not like ${name2}`
	// let err = new Error(messg) // equivalent to {name: 'Error', message: 'myMessage}
	let err = {name: 'RAIN AWAY', message: 'SUN DOWN'}
	throw err
}

// On calling any someNonExistingFunction rpc send status: 404 (NOT FOUND)
// and sends message about using using non-existing function
