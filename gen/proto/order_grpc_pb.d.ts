// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: proto/order.proto

import * as proto_order_pb from "../proto/order_pb";
import * as grpc from "@grpc/grpc-js";

interface IShopServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createOrder: grpc.MethodDefinition<proto_order_pb.CreatOrderRequest, proto_order_pb.CreateOrderResponse>;
  listOrder: grpc.MethodDefinition<proto_order_pb.ListOrderRequest, proto_order_pb.ListeOrderResponse>;
}

export const ShopServiceService: IShopServiceService;

export interface IShopServiceServer extends grpc.UntypedServiceImplementation {
  createOrder: grpc.handleUnaryCall<proto_order_pb.CreatOrderRequest, proto_order_pb.CreateOrderResponse>;
  listOrder: grpc.handleUnaryCall<proto_order_pb.ListOrderRequest, proto_order_pb.ListeOrderResponse>;
}

export class ShopServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createOrder(argument: proto_order_pb.CreatOrderRequest, callback: grpc.requestCallback<proto_order_pb.CreateOrderResponse>): grpc.ClientUnaryCall;
  createOrder(argument: proto_order_pb.CreatOrderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_order_pb.CreateOrderResponse>): grpc.ClientUnaryCall;
  createOrder(argument: proto_order_pb.CreatOrderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_order_pb.CreateOrderResponse>): grpc.ClientUnaryCall;
  listOrder(argument: proto_order_pb.ListOrderRequest, callback: grpc.requestCallback<proto_order_pb.ListeOrderResponse>): grpc.ClientUnaryCall;
  listOrder(argument: proto_order_pb.ListOrderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_order_pb.ListeOrderResponse>): grpc.ClientUnaryCall;
  listOrder(argument: proto_order_pb.ListOrderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_order_pb.ListeOrderResponse>): grpc.ClientUnaryCall;
}
