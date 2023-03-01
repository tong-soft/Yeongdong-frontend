import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 간단한 내 정보 가져오기
 * @method GET
 */
const get_my_simple_info = () => {
  return fetch(`${_.SERVER_URL}/api/account/v1/me/profile`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('young-dong'),
    },
  })
    .then((res) => {
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: 'Server error' });
      if (!res.ok) throw res.json();
      console.log('간단 정보 가져오기 ✅\n');
      let data = res.json();
      return data;
    })
    .catch(async (error) => {
      let err = await error.then();
      console.log(err);
      notification['error']({
        message: `간단정보 받아오기 ❌`,
        description: err.errorName || err.errorCode,
        duration: 2,
      });

      console.log(
        '간단 정보 가져오기 ❌\n' +
          err.error.message +
          err.error.status +
          '\n' +
          err.error.code
      );
      //에러처리
      throw err;
    });
};

export default get_my_simple_info;
