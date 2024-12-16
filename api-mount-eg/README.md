# Readme

- Code Source (modified though): https://www.npmjs.com/package/api-mount-client

Inspiration:
- [Stackoverflow Question](https://stackoverflow.com/questions/14951251/how-to-call-node-js-server-side-method-from-javascript)
- [MongoDB Realm Backend-as-a-Service](https://youtu.be/Evp3xTzWCu4)

```bash
# for client
npm i api-mount-client

# for server
npm i api-mount-server
```

## My own ideology to achieve this using proxy

FYI: proxy works in browser and nodejs

```js
const target = {}

const handler = {
	get(target, prop, receiver) {
		return () => console.log('fun?:', prop)
	},
}

const rpc = new Proxy(target, handler)

rpc.a()
// VM583:5 fun?: a

rpc.b()
// VM583:5 fun?: b
```
