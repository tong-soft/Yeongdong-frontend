import React from "react";
import ContentContainer from "../../Containers/redux/pages/mypage/ContentContainer";
import Header from "../../layout/Header"
import Footer from "../../layout/Footer";

const Mypage = () => {
    return (
        <>
            <Header />
            <ContentContainer />
            <Footer></Footer>
        </>
    )
}

export default Mypage;
