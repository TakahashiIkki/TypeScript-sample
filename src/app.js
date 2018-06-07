"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
// classを指定してクラス化
class MyClass {
    // コンストラクター
    constructor() {
        this.message = 'TypeScript';
        // httpサーバーの設定
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        // サーバーを起動してリクエスト待機状態とする.
        server.listen('5001');
    }
    requestHandler(request, response) {
        response.end('Hello World & ' + this.message + ' for HTTP');
    }
}
// Defaultクラスのインスタンスを作る
const myclass = new MyClass();
//# sourceMappingURL=app.js.map