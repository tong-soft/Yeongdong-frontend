import React, { useEffect } from 'react';
// import { naverClientId, naverRedirectURL, naverSecret } from '../../utils/OAuth';

const naver = window.naver;

const LoginNaver = ({ style }) => {
    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: 'DjjA5He4X8yR1w63omsK',
            callbackUrl: 'http://localhost:3000/youngdong-app/login',
            clientSecret: 'g3W4fkmFwr',
            isPopup: false, // popup 형식으로 띄울것인지 설정
            loginButton: { color: 'green', type: 3, height: '60' }, //버튼의 스타일, 타입, 크기를 지정
        });
        naverLogin.init();
    };

    useEffect(() => {
        initializeNaverLogin();
    }, []);

    return <div id='naverIdLogin' style={style} />;
};

export default LoginNaver;