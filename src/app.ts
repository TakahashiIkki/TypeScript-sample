import * as http from 'http';

// classを指定してクラス化
class MyClass {
    message: String = 'TypeScript';

    // コンストラクター
    constructor() {
        // httpサーバーの設定
        const server: http.Server = http.createServer (
            (request: http.IncomingMessage, response: http.ServerResponse) => 
                this.requestHandler(request, response));
        
        // サーバーを起動してリクエスト待機状態とする.
        server.listen('5001');
    }

    private requestHandler(request: http.IncomingMessage, response: http.ServerResponse) : void {
        response.end('Hello World & ' + this.message + ' for HTTP');
    }
}
   
// Defaultクラスのインスタンスを作る
const myclass = new MyClass();
