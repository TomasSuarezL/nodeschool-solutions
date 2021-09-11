const { pipeline } = require("stream");

pipeline(process.stdin, process.stdout, (err) => {
  if (err) {
    console.log("There has been an error", err);
  } else {
    console.log("Pipeline Succeded!.");
  }
});
