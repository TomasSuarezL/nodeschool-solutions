const { Readable, pipeline } = require("stream");

class ReadStream extends Readable {
  _read() {}
}

const stream = new ReadStream();

pipeline(stream, process.stdout, (err) => {
  if (err) console.log("Error", err);
  else console.log("Success");
});

stream.push(process.argv[2]);
