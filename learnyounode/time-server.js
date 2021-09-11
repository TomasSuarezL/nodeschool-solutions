const net = require("net");

const server = net.createServer(function (socket) {
  let date = new Date();
  date = `${date.getFullYear()}-${getRight("0" + (date.getMonth() + 1), 2)}-${getRight(
    "0" + date.getDate(),
    2
  )} ${getRight("0" + date.getHours(), 2)}:${getRight("0" + date.getMinutes(), 2)}\n`;
  socket.end(date);
});

server.listen(process.argv[2]);

const getRight = (str, n) => {
  return str.substring(str.length - n);
};
