import store from '../store/store';
import ACTION from '../store/actions/action';
import TOKEN from '../util/Token/';
import get_my_simple_info from '../service/api/get/get_account_my_simple_info';
import get_my_info from '../service/api/get/get_account_my_info';

const Start = () => {
  return new Promise((resolve, reject) => {
    if (!localStorage.getItem('young-dong')) return resolve(true);
    if (!store.getState().login_reducer.logined) {
      console.log('🏃‍♂️ token Exist setting redux 🏃‍♂️,,,,');

      TOKEN.exist()
        .then(async (token) => {
          /**
           * @description getMySimpleInfo
           * @typedef {Object} - {name: '이채은', userRole: 'BUYER'}
           */
          let getMySimpleInfo = await get_my_simple_info().then((res) => {
            return res.response;
          });
          let getMyInfo = await get_my_info().then((res) => {
            return res.response;
          });

          /**
           * @description getMySimpleInfo
           * @typedef {Object} - {accountId :String , exp:1673282258, sub : "accessToken",userRole:"BUYER"}
           * @accountId {String}
           */
          let decodeToken = TOKEN.decode(token);
          console.log('👇 decode.youngdong.accessToken');
          console.log(decodeToken);
          console.log(`role`, getMySimpleInfo.userRole);
          store.dispatch(ACTION.LOGIN_ACTION_FUNC());
          store.dispatch(
            ACTION.SET_USER__ACTION_FUNC({
              user: {
                name: getMySimpleInfo.name,
                role: getMySimpleInfo.userRole === 'BUYER' ? 'USER' : 'ADMIN',
                phoneNumber: getMyInfo.phoneNumber,
                email: getMyInfo.email,
                roadAddress: getMyInfo.roadAddress,
                jibunAddress: getMyInfo.jibunAddress,
                detailAddress: getMyInfo.detailAddress,
                zipCode: getMyInfo.zipCode,
              },
            })
          );
        })
        .then(() => resolve(true))
        .catch((err) => {
          console.log(err);
          console.log('start.catch');
          resolve(true);
          console.log(window.location);
          if (window.location.pathname !== '/') {
            return window.location.replace('/');
          }
          // return window.location.replace('/');
        });
    } else {
      //로그인 됬을시
      resolve(true);
    }
  });
};

export default Start;
