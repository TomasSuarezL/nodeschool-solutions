const crypto = require("crypto");
const { pipeline } = require("stream");
const decrypter = crypto.createDecipheriv("aes256", process.argv[2], process.argv[3]);

pipeline(process.stdin, decrypter, process.stdout, (err) => {
  if (err) {
    console.log("Pipeline Error", err);
  } else {
    console.log("Pipeline Success.");
  }
});
