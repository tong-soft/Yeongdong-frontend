import React from "react";
import ContentContainer from "../../Containers/redux/pages/notice/ContentContainer";
import Header from "../../Containers/redux/components/Header"
import Footer from "../../layout/Footer";

const Notice = () => {
    return (
        <>
            <Header />
            <ContentContainer />
            <Footer></Footer>
        </>
    )
}

export default Notice;
