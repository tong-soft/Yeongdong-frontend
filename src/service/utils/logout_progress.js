import store from '../../store/store';
import ACTION from '../../store/actions/action';

const LogoutProgress = () => {
  console.log('Running logout progress,,,');

  store.dispatch(ACTION.LOGOUT_ACTION_FUNC());
  store.dispatch(ACTION.DELETE_USER__ACTION_FUNC());

  sessionStorage.removeItem('young-dong');
};

export default LogoutProgress;
