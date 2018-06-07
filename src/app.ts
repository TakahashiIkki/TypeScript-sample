// classを指定してクラス化
class MyClass {
    message: String = 'TypeScript';

    // コンストラクター
    constructor() {
        console.log('Hello! Node.js & ' + this.message);
    }
}
   
// Defaultクラスのインスタンスを作る
const myclass = new MyClass();
