import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 전체 goods 가져오기
 * @method GET
 */
const get_all_goods = async () => {
  try {
    const res = await fetch(`${_.SERVER_URL}/api/product/v1/products/`, {
      method: 'GET',
    });
    if (!res.ok) throw res.json();
    return res.json();
  } catch (error) {
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
  }
};

export default get_all_goods;
