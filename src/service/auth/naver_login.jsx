import React, { useEffect } from 'react';
import _ from "../../config/env"

const naver = window.naver;

const LoginNaver = ({ style }) => {
    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: _.CLIENT_ID,
            callbackUrl: _.CALLBACK_URL,
            clientSecret: _.CLIENT_SECRET,
            isPopup: false, // popup 형식으로 띄울것인지 설정
            loginButton: { color: 'green', type: 3, height: '60' }, //버튼의 스타일, 타입, 크기를 지정
        });
        naverLogin.init()
    }

    useEffect(() => {
        initializeNaverLogin();// useEffect로 안하고 onclick하면 로그인배너아이콘 안뜸
    }, []);

    return <div id='naverIdLogin' style={style} />;
};

export default LoginNaver;