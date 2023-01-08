import store from '../../store/store';
import ACTION from '../../store/actions/action';

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

  // let naverLogoutPopUp;
  // var popupWidth = 600;
  // var popupHeight = 500;
  // var popupX = Math.ceil((window.screen.width - popupWidth) / 2);
  // var popupY = Math.ceil((window.screen.height - popupHeight) / 2);

  // const openPopUp = () => {
  //   naverLogoutPopUp = window.open(
  //     'https://nid.naver.com/nidlogin.logout',
  //     '_blank',
  //     'width=' + popupWidth + ',height=' + popupHeight + ',left=' + popupX + ', top=' + popupY
  //   );
  // };

  // const closePopUp = () => {
  //   naverLogoutPopUp.close();
  // };

  // openPopUp();
  // setTimeout(function () {
  //  closePopUp();
  // }, 1000);

  // window.open(
  //   'https://nid.naver.com/nidlogin.logout',
  //   '_blank',
  //   'width=' + popupWidth + ',height=' + popupHeight + ',left=' + popupX + ', top=' + popupY
  // );

  //!SECTION
};

export default LogoutProgress;
