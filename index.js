module.exports = (fn, cb) => (...args) =>
	(cb = args.pop()) && fn(...args).then(cb.bind(null, null)).catch(cb);