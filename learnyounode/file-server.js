const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const fileStream = fs.createReadStream(process.argv[3]);
  fileStream.pipe(res);
});

server.listen(process.argv[2]);
