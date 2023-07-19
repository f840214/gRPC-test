// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var calculator_pb = require('./calculator_pb.js');

function serialize_calculator_request(arg) {
  if (!(arg instanceof calculator_pb.request)) {
    throw new Error('Expected argument of type calculator.request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_request(buffer_arg) {
  return calculator_pb.request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_response(arg) {
  if (!(arg instanceof calculator_pb.response)) {
    throw new Error('Expected argument of type calculator.response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_response(buffer_arg) {
  return calculator_pb.response.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorService = exports.CalculatorService = {
  add: {
    path: '/calculator.Calculator/Add',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.request,
    responseType: calculator_pb.response,
    requestSerialize: serialize_calculator_request,
    requestDeserialize: deserialize_calculator_request,
    responseSerialize: serialize_calculator_response,
    responseDeserialize: deserialize_calculator_response,
  },
  sub: {
    path: '/calculator.Calculator/Sub',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.request,
    responseType: calculator_pb.response,
    requestSerialize: serialize_calculator_request,
    requestDeserialize: deserialize_calculator_request,
    responseSerialize: serialize_calculator_response,
    responseDeserialize: deserialize_calculator_response,
  },
};

exports.CalculatorClient = grpc.makeGenericClientConstructor(CalculatorService);
