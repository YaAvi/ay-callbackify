module.exports = fn => (...args) => fn(...args)
	.then(res => args[args.length-1](null, res)).catch(err => args[args.length-1](err));