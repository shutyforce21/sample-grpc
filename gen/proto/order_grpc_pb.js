// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_order_pb = require('../proto/order_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_CreateOrderRequest(arg) {
  if (!(arg instanceof proto_order_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateOrderRequest(buffer_arg) {
  return proto_order_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateOrderResponse(arg) {
  if (!(arg instanceof proto_order_pb.CreateOrderResponse)) {
    throw new Error('Expected argument of type CreateOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateOrderResponse(buffer_arg) {
  return proto_order_pb.CreateOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListOrderRequest(arg) {
  if (!(arg instanceof proto_order_pb.ListOrderRequest)) {
    throw new Error('Expected argument of type ListOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListOrderRequest(buffer_arg) {
  return proto_order_pb.ListOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListOrderResponse(arg) {
  if (!(arg instanceof proto_order_pb.ListOrderResponse)) {
    throw new Error('Expected argument of type ListOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListOrderResponse(buffer_arg) {
  return proto_order_pb.ListOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// define API
var ShopServiceService = exports.ShopServiceService = {
  createOrder: {
    path: '/ShopService/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_order_pb.CreateOrderRequest,
    responseType: proto_order_pb.CreateOrderResponse,
    requestSerialize: serialize_CreateOrderRequest,
    requestDeserialize: deserialize_CreateOrderRequest,
    responseSerialize: serialize_CreateOrderResponse,
    responseDeserialize: deserialize_CreateOrderResponse,
  },
  listOrder: {
    path: '/ShopService/ListOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_order_pb.ListOrderRequest,
    responseType: proto_order_pb.ListOrderResponse,
    requestSerialize: serialize_ListOrderRequest,
    requestDeserialize: deserialize_ListOrderRequest,
    responseSerialize: serialize_ListOrderResponse,
    responseDeserialize: deserialize_ListOrderResponse,
  },
};

exports.ShopServiceClient = grpc.makeGenericClientConstructor(ShopServiceService);
