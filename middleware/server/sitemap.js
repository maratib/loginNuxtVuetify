export default function (req, res, next) {
	// find the redirect if it exists where the from === the requested url
	// const redirect = redirects.find(r => r.from === req.url);

	// If it exists, redirect the page with a 301 response else carry on
	// console.log(req.url);

	if (req.url === '/sitemap.xml') {
		res.write('Hi write ur own sitemap.xml');
		res.end();
	} else {
		next();
	}
}