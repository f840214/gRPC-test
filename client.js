const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// 載入 .proto 文件
const packageDefinition = protoLoader.loadSync('calculator.proto');
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const calculatorPackage = protoDescriptor.calculator;

// 創建 gRPC 客戶端
const client = new calculatorPackage.Calculator(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// 發送 Add 請求
const request = { num1: 10, num2: 20 };
client.Add(request, (error, response) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('Result:', response.result);
});
