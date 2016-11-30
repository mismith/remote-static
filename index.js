const fetch = require('node-fetch');

module.exports = function remoteStatic(remote) {
	return function (req, res, next) {
		fetch(`${remote}${req.url}`).then(fetched => {
			if (!fetched.ok) return next();

			res.type(fetched.headers.get('content-type')).status(fetched.status);

			return fetched.buffer().then(buffer => {
				res.send(buffer);
			});
		})
		.catch(next);
	};
};