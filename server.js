const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// 載入 .proto 文件
const packageDefinition = protoLoader.loadSync('calculator.proto');
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const calculatorPackage = protoDescriptor.calculator;

// 實現 Add 服務
function add(call, callback) {
  const num1 = call.request.num1;
  const num2 = call.request.num2;
  const result = num1 + num2;
  callback(null, { result: result });
}
// 創建 gRPC 服務器
const server = new grpc.Server();
server.addService(calculatorPackage.Calculator.service, {
  Add: add,
  // Sub: sub
});

// 啟動服務器
server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log('Server started on port 50051');
});
