"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = __importDefault(require("socket.io"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const server = http_1.createServer(app);
const io = socket_io_1.default(server);
const PORT = process.env.PORT || 7000;
app.use(express_1.default.static(path_1.default.join(__dirname, "../client")));
app.get("/", function (req, res) {
    console.log(req);
    res.sendFile(path_1.default.join(__dirname, "../../src/client/index.html"));
});
io.on("connection", function (socket) {
    socket.on("message", function (msg) {
        console.log("message: " + msg);
        io.emit("message", msg);
    });
});
server.listen(PORT, function () {
    console.log("server listening. Port:" + PORT);
});
//# sourceMappingURL=server_main.js.map