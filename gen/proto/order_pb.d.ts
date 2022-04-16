// package: 
// file: proto/order.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Order extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getPayMethod(): Order.PayMethodMap[keyof Order.PayMethodMap];
  setPayMethod(value: Order.PayMethodMap[keyof Order.PayMethodMap]): void;

  getBy(): string;
  setBy(value: string): void;

  hasAt(): boolean;
  clearAt(): void;
  getAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    productId: string,
    price: number,
    payMethod: Order.PayMethodMap[keyof Order.PayMethodMap],
    by: string,
    at?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface PayMethodMap {
    UNKOWN: 0;
    CACHE: 1;
    CREADIT_CARD: 2;
    QR_CODE: 3;
  }

  export const PayMethod: PayMethodMap;
}

export class CreatOrderRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): void;

  getPayMethod(): Order.PayMethodMap[keyof Order.PayMethodMap];
  setPayMethod(value: Order.PayMethodMap[keyof Order.PayMethodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatOrderRequest): CreatOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatOrderRequest;
  static deserializeBinaryFromReader(message: CreatOrderRequest, reader: jspb.BinaryReader): CreatOrderRequest;
}

export namespace CreatOrderRequest {
  export type AsObject = {
    productId: string,
    payMethod: Order.PayMethodMap[keyof Order.PayMethodMap],
  }
}

export class CreateOrderResponse extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Order | undefined;
  setOrder(value?: Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrderResponse): CreateOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrderResponse;
  static deserializeBinaryFromReader(message: CreateOrderResponse, reader: jspb.BinaryReader): CreateOrderResponse;
}

export namespace CreateOrderResponse {
  export type AsObject = {
    order?: Order.AsObject,
  }
}

export class ListOrderRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrderRequest): ListOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrderRequest;
  static deserializeBinaryFromReader(message: ListOrderRequest, reader: jspb.BinaryReader): ListOrderRequest;
}

export namespace ListOrderRequest {
  export type AsObject = {
    userName: string,
  }
}

export class ListeOrderResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<Order>;
  setOrdersList(value: Array<Order>): void;
  addOrders(value?: Order, index?: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListeOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListeOrderResponse): ListeOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListeOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListeOrderResponse;
  static deserializeBinaryFromReader(message: ListeOrderResponse, reader: jspb.BinaryReader): ListeOrderResponse;
}

export namespace ListeOrderResponse {
  export type AsObject = {
    ordersList: Array<Order.AsObject>,
  }
}

