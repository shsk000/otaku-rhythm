"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const socket = socket_io_client_1.default("http://localhost");
$(function () {
    $("#message_form").submit(function () {
        socket.emit("message", $("#input_msg").val());
        $("#input_msg").val("");
        return false;
    });
    socket.on("message", function (msg) {
        $("#messages").append($("<li>").text(msg));
    });
});
//# sourceMappingURL=client_main.js.map