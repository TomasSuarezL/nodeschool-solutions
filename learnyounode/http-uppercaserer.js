const http = require("http");
const { Transform } = require("stream");

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

const server = http.createServer(function (req, res) {
  req.pipe(upperCaseTr).pipe(res);
});

server.listen(process.argv[2]);
