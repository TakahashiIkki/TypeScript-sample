"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerModule_1 = require("./ServerModule");
// classを指定してクラス化
class MyClass {
    // コンストラクター
    constructor() {
        // exportしてきたServerFunctionクラスのインスタンスを作成.
        const serverFunction = new ServerModule_1.ServerFunction();
        // 関数を実行する。
        serverFunction.initServer();
    }
}
// myclassクラスのインスタンスを作る
const myclass = new MyClass();
//# sourceMappingURL=app.js.map