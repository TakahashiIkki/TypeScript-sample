"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class ServerFunction {
    initServer() {
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        server.listen('5001');
    }
    /*
     * サーバーにリクエストがあった時に実行される関数
     */
    requestHandler(request, response) {
        response.end('Hello ServerFunction Class');
    }
}
exports.ServerFunction = ServerFunction;
//# sourceMappingURL=ServerModule.js.map