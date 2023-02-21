import _ from '../../../config/env';
import { notification } from 'antd';

/**
 * @description 시그니처 가져오기
 * @method GET
 * @param {number} pageNumber
 */
const get_grade_goods = async (grade) => {
  try {
    const res = await fetch(
      `${_.SERVER_URL}/api/product/v1/products/grades/${grade}`,
      {
        method: 'GET',
      }
    );
    if (!res.ok) throw res.json();
    console.log('해당 시그니처 grade 상품 가져오기 ✅\n');

    return res.json();
  } catch (error) {
    let err = await error.then();
    console.log(err);
    notification['error']({
      message: `해당 grade 상품 가져오기 ❌`,
      description: err.error.status || err.error.message,
      duration: 2,
    });
    console.log(
      'Error from get_grade_goods\n' +
        err.error.status +
        '\n' +
        err.error.message
    );
    //에러처리
    throw err;
  }
};

export default get_grade_goods;
