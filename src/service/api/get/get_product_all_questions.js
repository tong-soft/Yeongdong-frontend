import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 전체 문의 가져오기
 * @method GET
 * @request @headers youngdong token
 *
 */
const get_product_all_questions = (pageNumber = 0) => {
  return fetch(
    `${_.SERVER_URL}/api/product/v1/products/questions/?page=${Number(
      pageNumber
    )}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('young-dong'),
        'Content-type': 'application/json',
      },
    }
  )
    .then((res) => {
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: 'Server error' });
      if (!res.ok) throw res.json();
      let data = res.json();
      console.log('전체 문의 가져오기 성공  ✅\n');

      return data;
    })
    .catch(async (error) => {
      let err = await error.then();
      console.log(err);
      notification['error']({
        message: `전체 문의 가져오기 실패 ❌`,
        description: err.errorCode || err.error.status,
        duration: 2,
      });
      console.log(
        '전체 문의 가져오기 실패 ❌\n' +
          err.errorCode +
          '\n' +
          err.errorName +
          '\n'
      );
      if (err.errorCode === 401) {
        return window.location.replace(_.HOST_URL + '/' + _.BASE_URL);
      }
      //에러처리
      throw err;
    });
};

export default get_product_all_questions;
