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
