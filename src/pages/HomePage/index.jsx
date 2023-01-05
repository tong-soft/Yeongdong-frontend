import React from "react";
import ContentContainer from "../../Containers/pages/home/ContentContainer";
import Header from "../../Containers/redux/components/Header"
import Footer from "../../layout/Footer";
import LoginNaver from "../../mocks/LoginTest/LoginNaver";

const Home = () => {
    return (
        <>
            <Header />
            <LoginNaver></LoginNaver>
            <ContentContainer />
            <Footer></Footer>
        </>
    )
}

export default Home;
