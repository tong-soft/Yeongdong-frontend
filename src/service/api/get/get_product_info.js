import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 상품ID로 상품 세부 사항 조회
 * @method GET
 * @request @headers youngdong token
 * @param {string} productId
 * 😀
 */
const get_product_info = (productId) => {
  return fetch(`${_.SERVER_URL}/api/product/v1/products/${productId}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('young-dong'),
    },
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
        message: `상품ID로 상품 세부 사항 조회 실패 ❌`,
        duration: 2,
      });
      console.log(
        '상품ID로 상품 세부 사항 조회 실패 ❌' +
          err.status +
          err.path +
          '\n' +
          err.error
      ); //에러처리
      if (err.status === 401) {
        return window.location.replace(_.HOST_URL + '/' + _.BASE_URL);
      }
      throw err;
    });
};

export default get_product_info;
