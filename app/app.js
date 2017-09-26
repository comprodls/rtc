/**
 * Lighweight HTTP server for the Reference App. It has two main functions:
 * (1) Serves the HTML & static assets for the Reference App UX layer
 * (2) VHL Auth Endpoint (REST) Stub
 */

var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    routes = require("./routes/templates"),
    api = require("./routes/api");

var app = module.exports = express();

// Configuration
app.use(bodyParser.json());

// Static file routes
app.use("/", express.static(path.join(__dirname, "/")));
app.use("/static", express.static(path.join(__dirname, "/public")));
app.use("/lib", express.static(path.join(__dirname, "../dist")));

// JSON API
app.use("/api/auth/token", api.getAuthToken);

// Home Page
app.use("/", routes.index);


//Error Handler
app.use(function(req, res, next) {
	var err = { status: 404, message: "Page Not Found" };
	next(err);
});

//Error Handler
app.use(function(err, req, res, next) {
	if (err.status !== 404) {
		console.log("request error", err ? err.message : err, err ? err.stack : "");
	}
	res.status(err.status || 500).send({
		message: err.message,
		error: err
	});
});

// Start server
app.listen(process.env.PORT || 3000, function(){
	console.log("Express server listening on port %d", this.address().port);
});
