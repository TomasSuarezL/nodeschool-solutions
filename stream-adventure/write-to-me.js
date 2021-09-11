const { Writable, pipeline } = require("stream");

class WriteStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log("writing: " + chunk.toString());
    callback();
  }
}

const stream = new WriteStream();

process.stdin.resume();

pipeline(process.stdin, stream, (err) => {
  if (err) console.log("Error", err);
});
