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

const LoginModalForm = ({ isSelectLoginSignup, selectLogin, selectSignup, handleNaverLogin }) => {
    return (
        <>

            <Row>
                <Col span={12} style={{ borderBottom: "2px solid #393939" }}>
                    <Row>
                        <Col span={6}>
                            <SelectLoginSign isSelect={(isSelectLoginSignup === "login" ? true : false)}
                                onClick={selectLogin}>
                                로그인
                            </SelectLoginSign>
                        </Col>
                        <Col span={6}>
                            <SelectLoginSign isSelect={(isSelectLoginSignup === "signup" ? true : false)}
                                onClick={selectSignup}>
                                회원가입
                            </SelectLoginSign>
                        </Col>
                    </Row>
                </Col>

                {
                    isSelectLoginSignup === "login" ?
                        <Col span={12} style={{ marginTop: "1.5rem" }}>
                            {/* <Typo size={'1.5rem'} color={"#414141"} weight={"bold"}>아이디로 로그인</Typo> */}
                            <Row justify={"space-between"}>
                                <>

                                    {/* 
                                                        <Col span={12}>
                                                            <Col span={12}>
                                                                <TextField
                                                                    size="normal"
                                                                    margin="normal"
                                                                    required
                                                                    fullWidth
                                                                    id="email"
                                                                    label="이메일을 입력하세요."
                                                                    name="email"
                                                                    autoComplete="email"
                                                                    autoFocus
                                                                    onChange={settingLogInValueFunction.email}
                                                                    value={logInInfo.email}
                                                                />
                                                                <TextField

                                                                    margin="dense"
                                                                    required
                                                                    fullWidth
                                                                    name="password"
                                                                    label="비밀번호를 입력하세요"
                                                                    type="password"
                                                                    id="password"
                                                                    autoComplete="current-password"
                                                                    size="normal"
                                                                    onChange={settingLogInValueFunction.password}
                                                                    value={logInInfo.password}
                                                                />
                                                            </Col>
                                                            <Col span={12}>
                                                                <Button variant="contained" fullWidth style={{
                                                                    boxShadow: 'none',
                                                                    fontSize: '1.5rem',
                                                                    padding: '1rem 0px',
                                                                }}
                                                                    onClick={LoginBtnOnclick}
                                                                >
                                                                    로그인
                                                                </Button>
                                                            </Col>

                                                        </Col> 
                                                        */}
                                </>

                                {/* //SECTION - JSX 소셜로그인 */}
                                <Col span={12} style={{ marginTop: "1.5rem" }}>
                                    <Typo size={'1.5rem'} color={"#414141"} weight={"bold"}>소셜계정으로 로그인</Typo>

                                    <SnsLoginBtn naver onClick={handleNaverLogin}>
                                        <SnsIconWrapper >
                                            <img src={naverBtn} alt="NAVER" width={"80%"} />

                                        </SnsIconWrapper>
                                        <Typo cursor={"pointer"} width={"inherit"} padding={"0 0 0 5px"} textAlign={"center"} size={"1.2rem"}>네이버로 로그인</Typo>
                                    </SnsLoginBtn>
                                    <SnsLoginBtn >
                                        <SnsIconWrapper >
                                            <img src={kakaoBtn} alt="KAKAO" width={"90%"} />

                                        </SnsIconWrapper>
                                        <Typo width={"inherit"} padding={"0 0 0 5px"} textAlign={"center"} size={"1.2rem"}>카카오톡으로 로그인</Typo>
                                    </SnsLoginBtn>
                                    <LoginNaver style={{ display: "none" }}></LoginNaver>

                                </Col>
                                {/* //!SECTION - 소셜로그인 */}

                                <Col span={12} >
                                    <Divider></Divider>

                                    <Button variant="outlined" fullWidth size="large" style={{
                                        fontSize: '1.3rem',
                                        padding: '1rem 0px',
                                    }}>비회원으로 구매하기</Button>
                                </Col>
                            </Row>
                        </Col>
                        :

                        <Col span={12} style={{ marginTop: "1.5rem" }}>
                            <Typo size={'1.5rem'} color={"#414141"} weight={"bold"}>소셜계정으로 회원가입하기</Typo>
                            <Row justify={"space-between"}>
                                <>
                                    {/* <Col span={12} >
                                                            <Col span={12}>
                                                                <TextField
                                                                    size="normal"
                                                                    margin="normal"
                                                                    required
                                                                    fullWidth
                                                                    id="email"
                                                                    label="이메일을 입력하세요."
                                                                    name="email"
                                                                    autoComplete="email"
                                                                    onChange={settingSingUpValueFunction.email}
                                                                    value={signUpInfo.email}
                                                                />
                                                                <TextField

                                                                    margin="normal"
                                                                    required
                                                                    fullWidth
                                                                    name="password"
                                                                    label="비밀번호를 입력하세요"
                                                                    type="password"
                                                                    id="password"
                                                                    autoComplete="current-password"
                                                                    size="normal"
                                                                    onChange={settingSingUpValueFunction.password}
                                                                    value={signUpInfo.password}
                                                                />

                                                            </Col>
                                                            <Col span={12}>
                                                                <Button variant="contained" fullWidth style={{
                                                                    boxShadow: 'none',
                                                                    fontSize: '1.5rem',
                                                                    padding: '1rem 0px',
                                                                }}
                                                                    onClick={SignupBtnOnclick}
                                                                >
                                                                    가입신청
                                                                </Button>
                                                            </Col>
                                                        </Col> */}
                                </>
                                <Col span={12} style={{ marginTop: "1.5rem" }}>
                                    <SnsLoginBtn naver onClick={handleNaverLogin}>
                                        <SnsIconWrapper >
                                            <img src={naverBtn} alt="NAVER" width={"80%"} />

                                        </SnsIconWrapper>
                                        <Typo cursor={"pointer"} width={"inherit"} padding={"0 0 0 5px"} textAlign={"center"} size={"1.2rem"}>네이버로 회원가입</Typo>
                                    </SnsLoginBtn>
                                    <SnsLoginBtn >
                                        <SnsIconWrapper >
                                            <img src={kakaoBtn} alt="KAKAO" width={"90%"} />

                                        </SnsIconWrapper>
                                        <Typo width={"inherit"} padding={"0 0 0 5px"} textAlign={"center"} size={"1.2rem"}>카카오톡으로 회원가입</Typo>
                                    </SnsLoginBtn>
                                    <LoginNaver style={{ display: "none" }}></LoginNaver>

                                </Col>

                            </Row>
                        </Col>
                }
            </Row>
        </>
    )
}


export default LoginModalForm