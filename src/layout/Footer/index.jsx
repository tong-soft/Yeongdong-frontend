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
  padding-bottom: 10rem;
  margin-Top : 5rem;

`

const Footer = ({ children }) => {
    return (
        <>
            <FooterStyle>
                <Row gutter={[10, 10]}>
                    <Col span={12} style={{ color: "#fff", fontSize: "2rem", margin: "5px,10px", letterSpace: "2px", textTransform: "uppercase" }}>
                        ABOUT
                    </Col>
                    <Col span={12} justify={'center'} align={"center"} style={{ fontSize: "1.5rem" }} >
                        Scanfcode.com CODE WANTS TO BE SIMPLE is an initiative to help the upcoming programmers with the code.
                        Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple.
                        We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
                    </Col>
                    <Col span={6} >
                        <Row gutter={[5, 5]}>
                            <Col span={12} style={{ color: "#fff", fontSize: "2rem", letterSpace: "2px", textTransform: "uppercase" }}>
                                CATEGORIES
                            </Col>


                            <Col span={12} style={{ fontSize: "1.5rem" }} >
                                UI Design
                            </Col>
                            <Col span={12} style={{ fontSize: "1.5rem" }} >
                                React
                            </Col>
                            <Col span={12} style={{ fontSize: "1.5rem" }} >
                                Android
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6} >
                        <Row gutter={[5, 5]}>
                            <Col span={12} style={{ color: "#fff", fontSize: "2rem", letterSpace: "2px", textTransform: "uppercase" }}>
                                QUICK LINKS
                            </Col>
                            <Col span={12} style={{ fontSize: "1.5rem" }} >
                                About Us
                            </Col>
                            <Col span={12} style={{ fontSize: "1.5rem" }} >
                                Contact Us
                            </Col>
                            <Col span={12} style={{ fontSize: "1.5rem" }} >
                                Contribute
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} justify={"flex-start"} style={{ borderTop: "1px solid #979797", fontSize: "1.5rem", margin: "2rem 0" }}>

                    </Col>
                    <Col span={12} justify={"flex-start"} style={{ fontSize: "1.5rem" }}>
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