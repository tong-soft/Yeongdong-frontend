import _ from '../../../config/env';
import { notification } from 'antd';
import chalk from 'chalk';
/**
 * @description 영동언니 로그인
 * @method POST
 * @request @headers naver access token
 */
const PostNaverToken = (token) => {
  console.log('naver', token);
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
      console.log('영동언니 로그인  성공  ✅💚\n', chalk.white.bgBlack.bold('/api/product/v1'));

      return data;
    })
    .catch(async (error) => {
      notification['error']({
        message: `영동언니 로그인 실패`,
        description: `로그인을 다시 시도해 주세요`,
        duration: 2,
      });
      let err = await error.then();
      console.log('Error from PostNaverToken\n' + err.error.errorCode + '\n' + err.error.errorName);
      //에러처리
      throw err;
    });
};

export default PostNaverToken;
