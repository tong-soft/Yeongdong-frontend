import store from '../store/store';
import ACTION from '../store/actions/action';

const Start = async () => {
  console.log('start app');

  //NOTE 세션에 로그인 정보 남아있다면 로그인시키기 else null;
  if (sessionStorage.getItem('young-dong')) {
    store.dispatch(ACTION.LOGIN_ACTION_FUNC());
  }
};

export default Start;
