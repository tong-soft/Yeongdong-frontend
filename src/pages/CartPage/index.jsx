import React from "react";
import ContentContainer from "../../Containers/redux/pages/cart/ContentContainer";
import Header from "../../Containers/redux/components/Header"
import Footer from "../../layout/Footer";

const Cart = () => {
    return (
        <>
            <Header />
            <ContentContainer />
            <Footer></Footer>
        </>
    )
}

export default Cart;
