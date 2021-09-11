const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  console.log(req.url);
  let _url = new URL(req.url, `http://${req.headers.host}`);
  let date = new Date(_url.searchParams.get("iso"));
  console.log(_url.searchParams.get("iso"));

  if (_url.pathname === "/api/parsetime") {
    res.write(
      JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      })
    );
  } else if (_url.pathname === "/api/unixtime") {
    res.write(
      JSON.stringify({
        unixtime: date.getTime(),
      })
    );
  }
  res.end();
});

server.listen(process.argv[2]);
