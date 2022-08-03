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

// error throwing, send status: 400 (bad request) with body as `err` object
module.exports.rain = (name1, name2) => {
	const messg = `${name1} does not like ${name2}`
	// let err = new Error(messg) // equivalent to {name: 'Error', message: 'myMessage}
	let err = {name: 'RAIN IS NOT ALLOWED ON SUNNY DAY', message: 'THE BEST THING ONE CAN DO WHEN IT’S RAINING IS TO LET IT RAIN.'}
	throw err
}
