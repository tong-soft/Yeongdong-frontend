import store from '../../store/store';
import ACTION from '../../store/actions/action';
import { notification } from 'antd';

const LogoutProgress = () => {
  console.log('Running logout progress,,,');

  //SECTION - redux logout setting
  store.dispatch(ACTION.LOGOUT_ACTION_FUNC());
  store.dispatch(ACTION.DELETE_USER__ACTION_FUNC());
  //!SECTION

  //SECTION - 네이버 로그아웃 설정
  localStorage.removeItem('com.naver.nid.access_token');
  localStorage.removeItem('com.naver.nid.oauth.state_token');

  localStorage.removeItem('young-dong');

  notification['success']({
    message: `로그아웃 성공`,
    description: '다시 또 만나요!',

    duration: 2,
  });

  //!SECTION
};

export default LogoutProgress;
