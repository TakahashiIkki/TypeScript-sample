import {ServerFunction} from './ServerModule';

// classを指定してクラス化
class MyClass {
    // コンストラクター
    constructor() {
        // exportしてきたServerFunctionクラスのインスタンスを作成.
        const serverFunction = new ServerFunction();
        // 関数を実行する。
        serverFunction.initServer();
    }
}
   
// myclassクラスのインスタンスを作る
const myclass = new MyClass();
