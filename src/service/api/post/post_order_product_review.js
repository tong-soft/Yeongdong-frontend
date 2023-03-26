import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 리뷰 작성
 * @method POST
 * @request @headers youngdong token
 * @param {FormData}
 * @property {object} dto
 * @property {string} dto.content
 * @property {FormData} reviewImg
 */
const post_order_product_review = (orderProductId, reviewFormData) => {
  /* value 확인하기 */
  for (let value of reviewFormData.values()) {
    console.log(value);
  }
  return fetch(
    `${_.SERVER_URL}/api/order/v1/order/product/${orderProductId}/review`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('young-dong'),
      },
      body: reviewFormData,
    }
  )
    .then((res) => {
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: 'Server error' });
      if (!res.ok) throw res.json();
      notification['success']({
        message: `후기 등록 성공`,
      });

      let data = res.json();
      return data;
    })
    .catch(async (error) => {
      notification['error']({
        message: `후기 등록 실패 ❌`,
      });
      let err = await error.then();

      if (err.error.status === 401) {
        notification['error']({
          message: `로그인을 다시해 주세요 ❌`,
          description: err.error.code,
        });
      }
      console.log('후기 등록 실패 ❌\n' + err.error);
      console.log(err.error.code);
      //에러처리
      throw err;
    });
};

export default post_order_product_review;
