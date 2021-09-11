const { Readable, Transform, pipeline } = require("stream");
const duplexer2 = require("duplexer2");
const { createGzip } = require("zlib");

let booksByGenre = [];
let genre = "";

class JSONStream extends Transform {
  _transform(chunk, encoding, callback) {
    let _object = JSON.parse(chunk);
    if (_object.type === "genre") {
      genre = _object.name;
      booksByGenre.push({ name: genre, books: [] });
    } else {
      booksByGenre.filter((g) => g.name === genre)[0].books.push(_object);
    }
    callback();
  }
}

module.exports = function () {
  const ws = new JSONStream();
  const gzip = createGzip();

  pipeline(ws, gzip, (err) => {
    if (err) {
      console.log("Pipeline Error", err);
    } else {
      console.log("Pipeline Success.");
    }
  });

  return duplexer2(ws, gzip);
};
