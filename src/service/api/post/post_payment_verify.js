import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 결제 검증 
 * @method POST
 * @request @headers youngdong token
 * @param {object} {
  "impUid": "string",
  "merchantUid": "string"
}
 */
const PostPaymentVerify = (goodsInfo) => {
  return fetch(`${_.SERVER_URL}/api/order/v1/payment/verification`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('young-dong'),
      'Content-type': 'application/json',
    },
    body: JSON.stringify(goodsInfo),
  })
    .then((res) => {
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: 'Server error' });
      if (!res.ok) throw res.json();
      let data = res.json();
      return data;
    })
    .catch(async (error) => {
      let err = await error.then();
      notification['error']({
        message: `결제 검증 실패 ❌`,
        description: err.error.code || err.error.message,
        duration: 2,
      });
      console.log(
        '결제 검증 실패 ❌\n' +
          err.error.status +
          err.error.code +
          '\n' +
          err.error.message
      );
      //에러처리
      throw err;
    });
};

export default PostPaymentVerify;
