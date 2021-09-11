const http = require("http");

http.get(process.argv[2], (res) => {
  let dataString = "";
  let charCount = 0;
  res
    .on("data", (data) => {
      dataString += data.toString();
      charCount += data.toString().split("").length;
    })
    .on("end", () => {
      console.log(charCount);
      console.log(dataString);
    });
});
