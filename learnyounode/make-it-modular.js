const readDir = require("./mymodule");

readDir(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.forEach((f) => console.log(f));
  }
});
