import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";
import { Row, Col } from "../index"
import { Typo } from "../../Components/index"

const FooterStyle = styled.div`
    width: 100%;
    height : auto;
    display : flex;
    justify-content : center;
    /* 위치 맨 밑으로 */
    left : 0;
     bottom: 0;
    right : 0;
    background-color:#26272b;   
    padding:45px 0 20px;
  color:#737373;
  padding-bottom: 5rem;
  margin-Top : 5rem;

`

const Footer = ({ children }) => {
    return (
        <>
            <FooterStyle>
                <Row >
                    <Col span={12} style={{ marginBottom: "1rem" }}>
                        <Row gutter={[5, 10]}>
                            <Col span={12} style={{ color: "#fff", fontSize: "1.5rem", letterSpace: "2px", textTransform: "uppercase" }}>
                                ABOUT
                            </Col>

                            <Col span={12} justify={'center'} align={"center"} style={{ fontSize: "1rem" }} >
                                <Row gutter={[3, 0]}>
                                    <Col span={6}>
                                        <Col span={6}>
                                            사업자등록번호
                                        </Col>
                                        <Col span={6}>
                                            5018131330
                                        </Col>
                                    </Col>
                                    <Col span={6}>
                                        <Col span={6}>
                                            통신판매업신고번호
                                        </Col>
                                        <Col span={6}>
                                            2023-충북영동-0002 호
                                        </Col>
                                    </Col>
                                </Row>
                                <Row gutter={[3, 0]}>
                                    <Col span={6}>
                                        <Col span={6}>
                                            대표이사
                                        </Col>
                                        <Col span={6}>
                                            주성희
                                        </Col>
                                    </Col>
                                    <Col span={6}>
                                        <Col span={6}>
                                            상호명
                                        </Col>
                                        <Col span={6}>
                                            주식회사 와이엠컴퍼니
                                        </Col>
                                    </Col>
                                </Row>
                                <Row gutter={[3, 0]}>
                                    <Col span={6}>
                                        <Col span={6}>
                                            이메일
                                        </Col>
                                        <Col span={6}>
                                            arkhe7080@naver.com
                                        </Col>
                                    </Col>
                                    <Col span={6}>
                                        <Col span={6}>
                                            고객센터
                                        </Col>
                                        <Col span={6}>
                                            010-6301-5298
                                        </Col>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={6} >
                        <Row gutter={[5, 10]}>
                            <Col span={12} style={{ color: "#fff", fontSize: "1.5rem", letterSpace: "2px", textTransform: "uppercase" }}>
                                고객센터
                            </Col>


                            <Col span={12} style={{ fontSize: "1rem" }} >
                                강원도 춘천시 퇴계로 89 강원전문건설회관
                            </Col>
                            <Col span={12} style={{ fontSize: "1rem" }} >
                                전화 1588-3819
                            </Col>
                            <Col span={12} style={{ fontSize: "1rem" }} >
                                결제도용신고 1588-3816
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6} >
                        <Row gutter={[5, 10]}>
                            <Col span={12} style={{ color: "#fff", fontSize: "1.5rem", letterSpace: "2px", textTransform: "uppercase" }}>
                                전자금융거래 분쟁처리
                            </Col>
                            <Col span={12} style={{ fontSize: "1rem" }} >
                                전화 1588-3819
                            </Col>

                        </Row>
                    </Col>
                    <Col span={12} justify={"flex-start"} style={{ borderTop: "1px solid #979797", fontSize: "1.5rem", margin: "2rem 0" }}>

                    </Col>
                    <Col span={12} justify={"flex-start"} style={{ padding: "10px", fontSize: "1rem" }}>
                        Copyright © 2022 All Rights Reserved by
                        <br />
                        영동
                    </Col>

                </Row>

            </FooterStyle>
        </>
    )
}

export default Footer