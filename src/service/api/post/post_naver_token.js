import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 네이버에서 발급받은 토큰 전달
 * @method POST
 * @request @headers naver access token
 */
const PostNaverToken = (token) => {
  return fetch(`${_.SERVER_URL}/api/account/v1/auth/signin/naver/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: String(token),
    }),
  })
    .then((res) => {
      if (res.status === 500) throw Promise.resolve({ errorCode: 500, errorName: 'Server error' });
      if (!res.ok) throw res.json();
      let data = res.json();
      return data;
    })
    .catch(async (error) => {
      let err = await error.then();
      console.log(err);
      notification['error']({
        message: `전체 goods 가져오기 ❌`,
        description: err.errorName || err.errorCode,
        duration: 2,
      });
      console.log('Error from get_all_goods\n' + err.errorCode + '\n' + err.errorName);
      //에러처리
      throw err;
    });
};

export default PostNaverToken;
