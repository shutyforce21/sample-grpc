// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_order_pb = require('../proto/order_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_CreatOrderRequest(arg) {
  if (!(arg instanceof proto_order_pb.CreatOrderRequest)) {
    throw new Error('Expected argument of type CreatOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreatOrderRequest(buffer_arg) {
  return proto_order_pb.CreatOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ListeOrderResponse(arg) {
  if (!(arg instanceof proto_order_pb.ListeOrderResponse)) {
    throw new Error('Expected argument of type ListeOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListeOrderResponse(buffer_arg) {
  return proto_order_pb.ListeOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// define API
var ShopServiceService = exports.ShopServiceService = {
  createOrder: {
    path: '/ShopService/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_order_pb.CreatOrderRequest,
    responseType: proto_order_pb.CreateOrderResponse,
    requestSerialize: serialize_CreatOrderRequest,
    requestDeserialize: deserialize_CreatOrderRequest,
    responseSerialize: serialize_CreateOrderResponse,
    responseDeserialize: deserialize_CreateOrderResponse,
  },
  listOrder: {
    path: '/ShopService/ListOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_order_pb.ListOrderRequest,
    responseType: proto_order_pb.ListeOrderResponse,
    requestSerialize: serialize_ListOrderRequest,
    requestDeserialize: deserialize_ListOrderRequest,
    responseSerialize: serialize_ListeOrderResponse,
    responseDeserialize: deserialize_ListeOrderResponse,
  },
};

exports.ShopServiceClient = grpc.makeGenericClientConstructor(ShopServiceService);
