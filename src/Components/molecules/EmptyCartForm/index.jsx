import React from "react"
import { Row, Col, ContentStyle } from "../../../layout"
import { ReactComponent as CartIcon } from '../../../assets/svg/cartIcon.svg';
import { useNavigate } from "react-router-dom"
import { Typo, Btn } from "../../../Components/"




const EmptyCartForm = () => {
    const navigate = useNavigate();


    return (
        <ContentStyle>
            <Row style={{ padding: "10rem 0" }}>
                <Col span={12} justify={'center'} align={'center'}>
                    <CartIcon width={'7rem'} height={'7rem'} strokeWidth={"1"} color={'#d3d7df'} />
                </Col>
                <Col span={12} justify={'center'} align={'center'} style={{ padding: "0.5rem" }}>
                    <Typo size={"1.3rem"}>장바구니가 비었습니다.</Typo>
                </Col>
                <Col span={12} justify={'center'} align={'center'} style={{ padding: "0.5rem" }}>
                    <Btn width={'13rem'} types={'text'} onClick={() => navigate('/')} value={"쇼핑계속하기"}></Btn>
                </Col>
            </Row>
        </ContentStyle>
    )


}




export default EmptyCartForm