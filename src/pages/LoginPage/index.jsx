import React, { useEffect } from "react";
import Header from "../../Containers/redux/components/Header"
import Footer from "../../layout/Footer";
import { Row, Col, ContentStyle } from "../../layout"
import LoginNaver from "../../mocks/LoginTest/LoginNaver";
import { useNavigate } from "react-router-dom";

const Goods = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (window.location.href.includes('access_token')) {
            window.localStorage.setItem('token', window.location.href.split('=')[1].split('&')[0] ?? 'none');
            navigate('/');
        };
    }, [])
    return (
        <>
            <Header />
            <ContentStyle>
                <Row>
                    <Col span={9}>
                    </Col>
                </Row>
            </ContentStyle>
            <Footer></Footer>
        </>
    )
}

export default Goods;
