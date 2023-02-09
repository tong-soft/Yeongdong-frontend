import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 구매목록 전송
 * @method POST
 * @request @headers youngdong token
 * @param {array} [{"count": 0,"productId": 0}]
 */
const post_order_payment_youngdong = (goodsInfo) => {
  console.log(goodsInfo);
  return fetch(`${_.SERVER_URL}/api/order/v1/payment/`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('young-dong'),
      'Content-type': 'application/json',
    },
    body: JSON.stringify(goodsInfo),
  })
    .then((res) => {
      if (res.status === 500) throw Promise.resolve({ errorCode: 500, errorName: 'Server error' });
      if (!res.ok) throw res.json();
      let data = res.json();
      console.log('구매목록 전송 성공  ✅\n');

      return data;
    })
    .catch(async (error) => {
      let err = await error.then();
      notification['error']({
        message: `구매목록 전송 실패 ❌`,
        description: err.error.message || err.error.status,
        duration: 2,
      });
      console.log('구매목록 전송 실패 ❌\n' + err.error.message + '\n' + err.error.status + '\n' + err.error.code);
      //에러처리
      throw err;
    });
};

export default post_order_payment_youngdong;
