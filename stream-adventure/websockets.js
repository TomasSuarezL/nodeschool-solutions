const WebSocket = require("ws");
const { pipeline } = require("stream");

const ws = new WebSocket("ws://localhost:8099");

const stream = WebSocket.createWebSocketStream(ws);

pipeline(stream, process.stdout, (err) => {
  if (err) {
    console.log("Pipeline Error", err);
  } else {
    console.log("Pipeline Success.");
  }
});

stream.write("hello\n");
