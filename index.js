/*eslint-env node */
var http = require("http");

var server = http.createServer(/* @callback */ function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!!");
});

server.listen(process.env.PORT, function () {
  console.log("Server started");
});
