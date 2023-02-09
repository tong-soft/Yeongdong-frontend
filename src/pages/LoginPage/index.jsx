import React, { useEffect } from "react";
import Header from "../../Containers/redux/components/Header"
import Footer from "../../layout/Footer";
import { ContentStyle } from "../../layout"
import post_naver_token from "../../service/api/post/post_naver_token";
import LoginProcess from "../../service/auth/login_progress";
import _ from "../../config/env"
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.href.includes('access_token')) {
            const token = window.location.href.split('=')[1].split('&')[0] ?? 'null'

            console.log("👇 naver.token")
            console.log(token);
            if (token !== null) {

                navigate('/')
                post_naver_token(token)
                    .then((res) => {
                        console.log(res.response);
                        LoginProcess(res.response.accessToken);
                    }).catch(error => console.log(error))

            }


        };
        if (window.location.href.includes('error')) {
            window.alert("로그인에 실패하였습니다.")
            window.location.replace(_.HOST_URL + '/' + _.BASE_URL)

        }



    }, [navigate])
    return (
        <>
            <Header />
            <ContentStyle>
            </ContentStyle>
            <Footer></Footer>
        </>
    )
}

export default LoginPage;
