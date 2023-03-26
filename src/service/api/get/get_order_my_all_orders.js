import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 주문내역 가져오기
 * @method GET
 * @request @headers youngdong token
 * @param {number} pageNumber
 *😀
 */
const get_order_my_all_orders = (pageNumber = 0) => {
  return fetch(
    `${_.SERVER_URL}/api/order/v1/buyer/orders/?page=${pageNumber}`,
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

      return data;
    })
    .catch(async (error) => {
      let err = await error.then();
      console.log(err);
      notification['error']({
        message: `주문내역 가져오기 실패 ❌`,
        description: err.error.message || err.error.status,
        duration: 2,
      });
      console.log(
        '주문내역 가져오기 실패 ❌\n' +
          err.error.message +
          '\n' +
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

export default get_order_my_all_orders;
