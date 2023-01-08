import store from '../../store/store';
import ACTION from '../../store/actions/action';
import MockUser from '../../mocks/user';
import get_my_simple_info from '../api/get/get_my_simple_info';

/**
 * @function
 * @param
 */
const LoginProcess = (accessToken) => {
  console.log('LoginProcess running,,,,');
  console.log(accessToken);
  localStorage.setItem('young-dong', accessToken);

  get_my_simple_info()
    .then((res) => {
      console.log('성공성공ㅅ어공성ㄱ');
      console.log(res);
    })
    .catch((error) => console.log(error));

  store.dispatch(ACTION.LOGIN_ACTION_FUNC());

  store.dispatch(
    ACTION.SET_USER__ACTION_FUNC({
      user: {
        uid: MockUser.uid,
        name: MockUser.name,
        role: MockUser.role,
      },
    })
  );
  store.dispatch(ACTION.LOGIN_ACTION_FUNC());
};

export default LoginProcess;
