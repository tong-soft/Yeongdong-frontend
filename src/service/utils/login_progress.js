import store from '../../store/store';
import ACTION from '../../store/actions/action';

//TODO Mocked User information to real users
import MockUser from '../../mocks/user';
/**
 * @function
 * @param  loginInfo {userId, password}
 */
const LoginProcess = (loginInfo) => {
  console.log('LoginProcess running,,,,');

  sessionStorage.setItem('young-dong', true);
  console.log('SessionStorage저장중 💾');
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
