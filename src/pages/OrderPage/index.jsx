import React from "react";
import ContentContainer from "../../Containers/redux/pages/order/ContentContainer";
import Header from "../../Containers/redux/components/Header"
import Footer from "../../layout/Footer";

const Order = () => {
    return (
        <>
            <Header />
            <ContentContainer />
            <Footer></Footer>
        </>
    )
}

export default Order;
