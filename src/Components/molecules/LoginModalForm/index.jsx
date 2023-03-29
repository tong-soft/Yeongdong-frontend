import React from 'react';

import { Row, Col } from '../../../layout';
import Button from '@mui/material/Button';
import naverBtn from "../../../assets/icons/naverBtn.png"
import kakaoBtn from "../../../assets/icons/kakaoBtn.png"
import styled from 'styled-components';
import { Typo, Divider } from '../..';

import LoginNaver from '../../../service/auth/naver_login';

const SelectLoginSign = styled.div`
    transition: all 0.5s ease;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family :"nixgon";
    font-size : 2rem;
    padding : 1rem 2rem;
    width : 100%;
    border-radius : 1rem 1rem 0 0 ;
    background-color : white;
    cursor : pointer;
    ${props => props.isSelect ? {
        backgroundColor: "#393939",
        color: 'white',
    } : null}
`
const SnsLoginBtn = styled.div`
    margin : 5px 0;
    height : 4.5rem;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    background-color: ${props => props.naver ? `#1EC800` : `#F5E901`};
    color: ${props => props.naver ? `#fff` : `#000`};
    cursor : pointer;
`
const SnsIconWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width : 5rem;
    padding :0 10px;
    height : 100%;
    border-right:1px solid white;
    cursor : pointer;

`

const LoginModalForm = ({ handleNaverLogin }) => {
    return (
        <>

            <Row>
                <Col span={12} style={{ borderBottom: "2px solid #393939", paddingBottom: "0.5rem" }}>
                    <Row>
                        <Col span={12}>
                            <Typo size={'1.5rem'} color={"#414141"} weight={"bold"}>소셜계정으로 간편하게</Typo>
                        </Col>
                    </Row>
                </Col>

                <Col span={12} style={{ marginTop: "1.5rem" }}>
                    <Row justify={"space-between"}>
                        {/* //SECTION - JSX 소셜로그인 */}
                        <Col span={12} style={{ padding: "1rem 0" }}>
                            {/* <Typo size={'1.5rem'} color={"#414141"} weight={"bold"}>소셜계정으로 로그인</Typo> */}

                            <SnsLoginBtn naver onClick={handleNaverLogin}>
                                <SnsIconWrapper >
                                    <img src={naverBtn} alt="NAVER" width={"80%"} />
                                </SnsIconWrapper>
                                <Typo cursor={"pointer"} width={"inherit"} padding={"0 0 0 5px"} textAlign={"center"} size={"1.2rem"}>네이버로 로그인</Typo>
                            </SnsLoginBtn>
                            <LoginNaver style={{ display: "none" }}></LoginNaver>

                        </Col>
                        {/* //!SECTION - 소셜로그인 */}
                    </Row>
                </Col>

            </Row>
        </>
    )
}


export default LoginModalForm