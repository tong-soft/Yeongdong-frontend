import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 주소 수성
 * @method PATCH
 * @request @headers youngdong token
 */
const PatchEditAddress = (addressData) => {
  return fetch(`${_.SERVER_URL}/api/account/v1/me/info/address`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('young-dong'),
      'Content-type': 'application/json',
    },
    body: JSON.stringify(addressData),
  })
    .then((res) => {
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: 'Server error' });
      if (!res.ok) throw res.json();
      notification['success']({
        message: `주소 수정  성공 `,
      });
      let data = res.json();
      return data;
    })
    .catch(async (error) => {
      notification['error']({
        message: `주소 수정 실패 ❌`,
      });
      let err = await error.then();
      console.log(err);
      if (err.error.status === 401) {
        notification['error']({
          message: `로그인을 다시해 주세요 ❌`,
          description: err.error.code,
        });
      }
      console.log('주소 수정 실패 ❌\n' + err.error);
      console.log(err.error.code);
      //에러처리
      throw err;
    });
};

export default PatchEditAddress;
