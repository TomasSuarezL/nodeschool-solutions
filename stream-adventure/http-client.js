const { request } = require("http");
const { pipeline } = require("stream");

const options = { method: "POST" };
const req = request("http://localhost:8099/", options, (res) => {
  pipeline(res, process.stdout, (err) => {
    if (err) {
      console.log("Pipeline Error", err);
    }
  });
});

pipeline(process.stdin, req, (err) => {
  if (err) {
    console.log("Pipeline Error", err);
  }
});
