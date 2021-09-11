const tar = require("tar");
const { pipeline } = require("stream");
const crypto = require("crypto");

const decrypter = crypto.createDecipheriv(process.argv[2], process.argv[3], process.argv[4]);
const parser = new tar.Parse();

parser.on("entry", function (e) {
  let path = e.path;
  if (e.type !== "File") return e.resume();

  const hasher = crypto.createHash("md5", { encoding: "hex" });
  e.pipe(hasher);

  hasher.on("readable", () => {
    const data = hasher.read();
    if (data) {
      console.log(data.toString("hex"), path);
    }
  });
});

pipeline(process.stdin, decrypter, parser, (err) => {
  if (err) {
    console.log("Pipeline Error", err);
  }
});
