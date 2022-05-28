const api = window.ApiMountClient.mountApi({
	baseUrl: 'http://localhost:3000',
})

async function main() {
	let {log} = console
	log(await api.test())

	// ~ Sahil
	log(await api.yoy('haha'))
}

main()
