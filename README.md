# Readme

- Code Source (modified though): https://www.npmjs.com/package/api-mount-client

## My own ideology to achieve this using proxy

FYI: proxy works in browser and nodejs

```js
const target = {}

const handler3 = {
	get(target, prop, receiver) {
		return () => console.log('fun?:', prop)
	},
}

const proxy3 = new Proxy(target, handler3)

proxy3.a()
// VM583:5 fun?: a

proxy3.b()
// VM583:5 fun?: b
```
