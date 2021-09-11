const { Transform, pipeline } = require("stream");

let chunkCount = 0;

const caserTr = new Transform({
  transform(chunk, encoding, callback) {
    chunkCount++;
    if (chunkCount % 2 == 0) {
      this.push(chunk.toString().toUpperCase());
    } else {
      this.push(chunk.toString().toLowerCase());
    }
    callback();
  },
});

pipeline(process.stdin, caserTr, process.stdout, (err) => {
  if (err) console.log("Error in pipeline", err);
});
