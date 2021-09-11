const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.filter((f) => path.extname(f) === "." + process.argv[3]).forEach((f) => console.log(f));
  }
});
