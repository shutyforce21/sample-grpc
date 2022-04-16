// grpc framework
import {Server, ServerCredentials} from "@grpc/grpc-js";
// protocで生成したjs
import {
    ShopServiceService,
    IShopServiceServer
} from "../gen/proto/order_grpc_pb";

const startServer = () => {
    // サーバーインスタンス
    const server = new Server();

    // APIのサービスハンドラを結びつける
    // server.addService(
    //     ShopServiceService,
    //     new ServerImplement(createOrder, listOrder)
    // );

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
