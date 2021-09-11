const trumpet = require("trumpet");
const tr = trumpet();
const { pipeline, Transform } = require("stream");

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

tr.pipe(process.stdout);

const trStream = tr.select(".loud").createStream();

trStream.pipe(upperCaseTr).pipe(trStream);

pipeline(process.stdin, tr, (err) => {
  if (err) {
    console.log("Pipeline Error", err);
  }
});
