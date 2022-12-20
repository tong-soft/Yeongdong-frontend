import React from "react";
import ContentContainer from "../../Containers/redux/pages/servicecenter/ContentContainer";
import Header from "../../Containers/redux/components/Header"
import Footer from "../../layout/Footer";

const Servicecenter = () => {
    return (
        <>
            <Header />
            <ContentContainer />
            <Footer></Footer>
        </>
    )
}

export default Servicecenter;
