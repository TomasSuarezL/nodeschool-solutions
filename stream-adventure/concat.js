const concat = require("concat-stream");
const { pipeline } = require("stream");

pipeline(
  process.stdin,
  concat((data) => {
    process.stdout.write(data.toString().split("").reverse().join(""));
  }),
  (err) => {
    if (err) console.log("Error", err);
  }
);
