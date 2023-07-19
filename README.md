# 在創建新的 Node.js 並安裝相關的套件
```
$ npm init -y
$ npm install grpc @grpc/grpc-js
```
# 創建 .proto 文件：在項目文件夾中
# 生成 gRPC 代碼：在終端中運行以下命令，將 .proto 文件轉換為 gRPC 相關的 JavaScript 代碼

```
$ npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./ --grpc_out=./ --proto_path=./ your.proto

```

* --js_out=import_style=commonjs,binary:./ 
// 指定生成 CommonJS 风格的 JavaScript 代碼，并將生成的文件存儲在當前目錄下。
* --grpc_out=./ 
//指定生成的 gRPC 相關代碼，并將其存儲在當前目錄下。
* --proto_path=./ 指定 .proto 文件所在的路徑，這里假設 .proto 文件位於當前目錄下。
* your.proto 替換為你的 .proto 文件名稱。


# .proto，它的功能類似於我們在使用 npm 進行套件管理的 package.json，也就是告訴 npm 該去下載什麼版本的套件；而 .proto 則是定義了你的 gRPC 會有什麼樣的功能，並透過 protocol buffer compiler (protoc)進行編譯為程式語言