const { Transform, pipeline } = require("stream");

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

pipeline(process.stdin, upperCaseTr, process.stdout, (err) => {
  if (err) console.log("Error in pipeline", err);
});
