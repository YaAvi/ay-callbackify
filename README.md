# ay-callbackify
[![npm version](https://img.shields.io/badge/npm-1.0.7-green.svg)](https://www.npmjs.com/package/ay-callbackify)

node callbackify promises

### Install:
```
npm install ay-callbackify
```
### Usage Example:
```javascript
const callbackify = require('ay-callbackify');
const promise = name => new Promise((resolve, reject) => setTimeout(resolve.bind(this, name), 100));
const callback = callbackify(promise);
callback('John Doe', (err, res) => {
	if (err) {
		console.log(err);
	}
	console.log(res);
});
```
