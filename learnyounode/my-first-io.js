const fs = require("fs");

let _buffer = fs.readFileSync(process.argv[2] || "");
console.log(_buffer.toString().split("\n").length - 1);
