import store from '../../store/store';
import ACTION from '../../store/actions/action';
import MockUser from '../../mocks/user';
import get_my_simple_info from '../api/get/get_account_my_simple_info';
import get_my_info from '../api/get/get_account_my_info';
/**
 * @function
 * @param
 */
const LoginProcess = (accessToken) => {
  console.log('🏃LoginProcess running 🏃‍♂️,,,,');
  console.log('👇 youngdong.accessToken');
  console.log(accessToken);
  localStorage.setItem('young-dong', accessToken);

  get_my_simple_info()
    .then((res) => {
      console.log('GET my_simple_info Done ✅');
      const userInfo = res.response;
      store.dispatch(
        ACTION.SET_USER__ACTION_FUNC({
          user: {
            name: userInfo.name,
            role: userInfo.userRole === 'BUYER' ? 'USER' : 'ADMIN',
          },
        })
      );
    })
    .catch((error) => console.log(error));

  get_my_info().then((res) => {
    console.log('GET my_info Done ✅');
    const userInfo = res.response;
    store.dispatch(
      ACTION.SET_USER__ACTION_FUNC({
        user: {
          phoneNumber: userInfo.phoneNumber,
          email: userInfo.email,
          roadAddress: userInfo.roadAddress,
          jibunAddress: userInfo.jibunAddress,
          detailAddress: userInfo.detailAddress,
          zipCode: userInfo.zipCode,
        },
      })
    );
  });

  store.dispatch(ACTION.LOGIN_ACTION_FUNC());

  store.dispatch(
    ACTION.SET_USER__ACTION_FUNC({
      user: {
        name: MockUser.name,
        role: MockUser.role,
      },
    })
  );
  store.dispatch(ACTION.LOGIN_ACTION_FUNC());
};

export default LoginProcess;
