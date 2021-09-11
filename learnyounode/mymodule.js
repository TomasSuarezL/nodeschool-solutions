const fs = require("fs");

const readDir = (filename, extension, cb) => {
  fs.readdir(filename, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(
        null,
        data.filter(
          (f) =>
            f.includes(".") &&
            f.split(".")[f.split(".").length - 1] ===
              extension.split(".")[extension.split(".").length - 1]
        )
      );
    }
  });
};

module.exports = readDir;
