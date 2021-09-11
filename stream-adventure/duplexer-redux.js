const duplexer2 = require("duplexer2");
const { Writable } = require("stream");

const countries = {};

class WriteStream extends Writable {
  _write(chunk, encoding, callback) {
    countries[chunk.country] = countries[chunk.country] ? countries[chunk.country] + 1 : 1;
    callback();
  }
}

module.exports = function (counter) {
  // return a duplex stream to count countries on the writable side
  // and pass through `counter` on the readable side
  const ws = new WriteStream({ objectMode: true });

  ws.on("finish", () => {
    counter.setCounts(countries);
  });

  return duplexer2(ws, counter);
};
