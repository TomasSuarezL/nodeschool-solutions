const { pipeline } = require("stream");
const fs = require("fs");

pipeline(fs.createReadStream(process.argv[2]), process.stdout, (err) => {
  if (err) {
    console.log("There has been an error", err);
  } else {
    console.log("Pipeline Succeded!.");
  }
});
