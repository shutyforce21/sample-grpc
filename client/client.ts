import { ShopServiceClient } from '../gen/proto/order_grpc_pb';
import { credentials } from '@grpc/grpc-js';
import {
  CreateOrderRequest,
  CreateOrderResponse,
  ListOrderRequest,
  ListOrderResponse,
  Order
} from '../gen/proto/order_pb';
import * as dayjs from 'dayjs';

// APIクライアントを生成する
const createClient = () => {
  return new ShopServiceClient(
    'localhost:50051',
    credentials.createInsecure(), // SSLを利用しない場合の設定
  );
}

// 注文作成APIへリクエストする
const createOrderRequest = async (client: ShopServiceClient) => {
  // リクエストオブジェクトを作成
  const request = new CreateOrderRequest();
  request.setProductId( 'dummy-product-id' );
  request.setPayMethod( Order.PayMethod.CREDIT_CARD );

  const response = await new Promise<CreateOrderResponse>( ( resolve, reject ) => {
    // APIクライアントを利用して、gRPCエンドポイントにリクエストを実行する
    client.createOrder( request, ( error, response ) => {
      if ( error ) {
        console.error( 'エラーが発生しました。' );
        console.error( error );
        reject( error );
      }
      resolve( response );
    } );
  } );

  console.log( '注文作成 => 成功' );
  console.log( response.getOrder().toObject() );
};

// 注文一覧APIへリクエストする
const listOrderRequest = async (client: ShopServiceClient) => {
  const request = new ListOrderRequest();
  request.setUserName('dummy-user-name')

  const response = await new Promise<ListOrderResponse>( ( resolve, reject ) => {
    client.listOrder( request, ( error, response ) => {
      if ( error ) {
        console.error( 'エラーが発生しました。' );
        console.error( error );
        reject( error );
      }
      resolve( response );
    } );
  } );

  console.log( '注文一覧 => 成功' );
  console.log(
    // 戻り値のオブジェクトの型付けもリッチな感じ
    response
      .getOrdersList()
      .map(_ => _.toObject())
      .map(_ => ({
        ..._,
        at: dayjs.unix(_.at.seconds).format(),
      }))
  );
};

(async () => {
  const client = createClient();
  await createOrderRequest(client);
  await listOrderRequest(client);
  await client.close();
})().catch(console.error)