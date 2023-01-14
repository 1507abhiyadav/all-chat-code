const http = require("http");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const socketIO = require("socket.io");
const app = express();
const port = 5000 || process.env.PORT;

app.use(cors());

const server = http.createServer(app);
const io = socketIO(
  server
  // {
  // cors:{
  //     origin: "http://localhost:3000",
  //     methods:["GET","POST"],
  // },
  // }
);

const users = [{}];
app.get("/", (req, res) => {
  res.send("hello api");
});

io.on("connection", (socket) => {
  console.log(`new connection `);

  socket.on("joined", (data) => {
    users[socket.id] = data;
    console.log(data, "hii data add");
    socket.emit("welcome", { users: "admin", message: "welcome to the chat" });
  });

  socket.on("disconnect", () => {
    console.log("User left...");
  });
});

server.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
