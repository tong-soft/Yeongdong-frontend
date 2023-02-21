import _ from '../../../config/env';
import { notification } from 'antd';
import chalk from 'chalk';

/**
 * @description 상품 등록
 * @method POST
 * @request @headers youngdong token
 * @param {FormData}
 * @property {object} deliveryInfo
 * @property {string} deliveryInfo.deliveryCompany
 * @property {string} deliveryInfo.trackingNumber
 */
const PatchOrderProductDelivery = (orderProductId, deliveryInfo) => {
  console.log('🚀 ~ deliveryInfo', deliveryInfo);
  return fetch(
    `${_.SERVER_URL}/api/order/v1/admin/order/product/${orderProductId}/delivery`,
    {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('young-dong'),
        'Content-type': 'application/json',
      },
      body: JSON.stringify(deliveryInfo),
    }
  )
    .then((res) => {
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: 'Server error' });
      if (!res.ok) throw res.json();
      notification['success']({
        message: `배송정보 입력 완료`,
      });
      console.log(
        '배송정보 입력 완료  ✅\n',
        `/api/order/v1/admin/order/product/${orderProductId}/delivery`
      );

      let data = res.json();
      return data;
    })
    .catch(async (error) => {
      let err = await error.then();
      console.log(err);
      notification['error']({
        message: `배송정보 입력 실패 `,
      });

      if (err.error.status === 401) {
        //UNAUTHORIZED
        notification['error']({
          message: `로그인을 다시해 주세요 `,
          description: err.error.code,
        });
        return window.location.replace(_.HOST_URL + '/' + _.BASE_URL);
      }
      console.log('배송정보 입력 실패 ❌\n' + err.error);
      console.log(err.error.code);
      //에러처리
      throw err;
    });
};

export default PatchOrderProductDelivery;
