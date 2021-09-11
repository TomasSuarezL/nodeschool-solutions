const http = require("http");
const { pipeline, Transform } = require("stream");

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

const server = http.createServer(function (req, res) {
  if (req.method === "POST") {
    pipeline(req, upperCaseTr, res, (err) => {
      if (err) {
        console.log("Pipeline Error", err);
      } else {
        console.log("Pipeline Success.");
      }
    });
  }
});

server.listen(process.argv[2]);
