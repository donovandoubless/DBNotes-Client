const createProxyMiddleware = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/auth",
		createProxyMiddleware({
			target: "https://mydb-notes.herokuapp.com",
			changeOrigin: true,
		})
	);
};
