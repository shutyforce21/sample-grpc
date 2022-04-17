// grpc framework
import {Server, ServerCredentials} from "@grpc/grpc-js";
import * as grpc from "@grpc/grpc-js";
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { CreateOrderResponse, ListOrderResponse, Order } from '../gen/proto/order_pb';
// protocで生成したjs
import {
    ShopServiceService,
    IShopServiceServer
} from "../gen/proto/order_grpc_pb";

class ServerImplement implements IShopServiceServer {
    [name: string]: grpc.UntypedHandleCall;
    constructor (
        public createOrder: IShopServiceServer['createOrder'],
        public listOrder: IShopServiceServer['listOrder'],
    ) {}
}

const orderList: Order[] = [];

const createOrder: IShopServiceServer['createOrder'] = ( call, callback ) => {
    console.log('[start]: createOrder');
  
    // orderを作成
    const order = new Order();
    order.setProductId(call.request.getProductId());
    order.setPayMethod(call.request.getPayMethod());
    order.setPrice(Math.round(Math.random() * 10_000));
    order.setBy('dummy-user-name');
    order.setAt(Timestamp.fromDate(new Date()));
  
    // responseオブジェクトを作成
    const response = new CreateOrderResponse();
    response.setOrder(order);
    orderList.push(order);
  
    // 第一引数がerror, 第二引数がレスポンス
    callback(null, response);
    console.log('[end]: createOrder');
  }
  
  const listOrder: IShopServiceServer['listOrder'] = ( call, callback ) => {
    console.log('[start]: listOrder');
  
    const response = new ListOrderResponse();
    response.setOrdersList(orderList.filter(order => {
      return order.getBy() === 'dummy-user-name';
    }));
  
    callback(null, response);
    console.log('[end]: listOrder');
  }

const startServer = () => {
    // サーバーインスタンス
    const server = new Server();
    // APIのサービスハンドラを結びつける
    server.addService(
        ShopServiceService,
        new ServerImplement(createOrder, listOrder)
    );

    server.bindAsync(
        "127.0.0.1:50051",
        ServerCredentials.createInsecure(),
        (err, port) => {
            if (err) {
                console.error(err);
                return;
            }

            server.start();
            console.log(`grpc server start, port: ${port}`)
        }
    )
}

startServer();
