import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 상품ID로 상품 후기 조회
 * @method GET
 * @request @headers youngdong token
 * @param {string} productId
 */
const PostProduct = (productId, pageNumber = 0) => {
  return fetch(
    `${
      _.SERVER_URL
    }/api/product/v1/products/${productId}/reviews/?page=${Number(pageNumber)}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('young-dong'),
      },
    }
  )
    .then((res) => {
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: 'Server error' });
      if (!res.ok) throw res.json();
      console.log(
        '상품ID로 상품 후기 조회 성공  💚\n',
        `api/product/v1/products/${productId}`
      );

      let data = res.json();
      return data;
    })
    .catch(async (error) => {
      let err = await error.then();
      notification['error']({
        message: `상품ID로 상품 후기 조회 실패 ❌`,
        duration: 2,
      });
      console.log(
        '상품ID로 상품 후기 조회 실패 ❌\n' +
          err.error.message +
          err.error.status +
          '\n' +
          err.error.code
      );
      if (err.error.status === 401) {
        return window.location.replace(_.HOST_URL + '/' + _.BASE_URL);
      }

      //에러처리
      throw err;
    });
};

export default PostProduct;
