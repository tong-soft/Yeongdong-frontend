import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 전체 goods 가져오기
 * @method GET
 * @param {number} pageNumber
 */
const get_all_goods = async (pageNumber = 0) => {
  try {
    const res = await fetch(`${_.SERVER_URL}/api/product/v1/products/?page=${Number(pageNumber)}`, {
      method: 'GET',
    });
    if (!res.ok) throw res.json();
    console.log('전체 상품 가져오기 ✅\n', `/api/product/v1/?page=${Number(pageNumber)}`);

    return res.json();
  } catch (error) {
    let err = await error.then();
    console.log(err);
    notification['error']({
      message: `전체 goods 가져오기 ❌`,
      description: err.error || err.status,
      duration: 2,
    });
    console.log('Error from get_all_goods\n' + err.error + '\n' + err.status);
    //에러처리
    throw err;
  }
};

export default get_all_goods;
