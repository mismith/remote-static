# remote-static

Express middleware to proxy-map local URLs to a remote host.


# Usage

Simply specify the remote URL when you add your middleware:

	const express      = require('express'),
	      app          = express(),
	      remoteStatic = require('remote-static');

	app.use(remoteStatic('https://example.com'));
	app.listen(3000);

Then, if you ping say, `localhost:3000/path/to/asset` and `https://example.com/path/to/asset` exists, it will be served up.
If it doesn't exist, this middleware internally calls `next()` and the request passes through unaffected.