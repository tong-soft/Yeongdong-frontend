import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 문의올리기
 * @method GET
 * @request @headers youngdong token
 * @error 처리
 */
const post_product_questions = (productId, productQuestionData) => {
  return fetch(
    `${_.SERVER_URL}/api/product/v1/products/${productId}/questions`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('young-dong'),
        'Content-type': 'application/json',
      },
      body: JSON.stringify(productQuestionData),
    }
  )
    .then((res) => {
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: 'Server error' });
      if (!res.ok) throw res.json();
      let data = res.json();
      notification['success']({
        message: `문의올리기 성공 `,
        description: '마이페이지에서 확인할 수 있습니다.',
        duration: 2,
      });
      return data;
    })
    .catch(async (error) => {
      let err = await error.then();
      console.log(err);
      notification['error']({
        message: `문의올리기 실패 ❌`,
        description: err.status || err.error,
        duration: 2,
      });
      console.log(
        '문의올리기 실패 ❌\n' + err.path + '\n' + err.status + '\n' + err.error
      );
      if (err.error.status === 401) {
        return window.location.replace(_.HOST_URL + '/' + _.BASE_URL);
      }
      //에러처리
      throw err;
    });
};

export default post_product_questions;
