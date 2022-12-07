import React, { useState } from "react"
import { Row, Col } from "../../../layout"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import headerIcon from "../../../assets/icons/youngdongHeaderIcon.png"
import { Image, Typo, Divider } from "../../../Components/"
import HamburgerIcon from "../../../assets/icons/hamburgerIcon.png"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import naverBtn from "../../../assets/icons/naverBtn.png"
import kakaoBtn from "../../../assets/icons/kakaoBtn.png"
import login_process from "../../../service/utils/login_progress"
import signup_process from "../../../service/utils/signup_progress"
import logout_process from "../../../service/utils/logout_progress"

const IconHeader = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    width : 100%;
    padding: 2rem;
    box-sizing: border-box;
`
const CategoryHeader = styled.div`
    display : flex;
    align-items : center;
    width : 100%;
    height : auto;
    padding :2.5rem 2rem 2rem 2rem;
    box-sizing: border-box;
    background-color :#c2e19d;
    position: sticky;
    top : 0;
    z-index: 1;
`

const CategoryBox = styled.div`
    margin : 5px;
    display : flex;
    align-items : center;
    justify-content: flex-start;
    font-size : 1.2rem;
    border-left : ${props => props.red ? `#e64937` : `#545454`} 2px solid;
    padding-left: 5px;
    color : ${props => props.red ? `#e64937` : `#545454`};
    font-family: "tway" ;
    
    cursor : pointer;
    ${props => props.login ? `
        font-family : "nixgon";
        margin-right : 20px;
        border-left-width : 1px;
        font-size : 1.1rem;
        font-weight :bold;
    `  : null
    }
`
const LoginBtnBox = styled.div`
    display: flex;
    align-items:center;
    font-size:1.1rem;
    padding-left:5px;
    height:0;
    /*width:max-content;*/
    right:300px;
    position:sticky;
    top:2rem;
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    padding-right: 2rem;
`

const SnsLoginBtn = styled.div`
    margin : 5px 0;
    padding : 1rem;

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
    width : 2rem;
    border-right:1px solid white;
    padding : 1rem;
    cursor : pointer;

`
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



const HeaderContent = ({ logined, role, }) => {

    const navigate = useNavigate()

    //SECTION modal , UI controls
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const handleLoginModalOpen = () => setOpenLoginModal(true);
    const handleLoginModalClose = () => setOpenLoginModal(false);

    const [isSelectLoginSignup, setIsSelectLoginSignup] = useState("login");
    const selectLogin = () => setIsSelectLoginSignup("login");
    const selectSignup = () => setIsSelectLoginSignup("signup");

    const doingLogin = () => {
        handleLoginModalOpen();
        selectLogin()
    }
    const doingSignup = () => {
        handleLoginModalOpen();
        selectSignup();
    }

    //!SECTION

    //SECTION 회원가입 정보
    const [signUpInfo, setSignUpInfo] = useState({
        email: "",
        password: "",
    });
    const [logInInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });
    let settingSingUpValueFunction = {
        email: (e) => {
            const email = e.target.value;
            return setSignUpInfo((state) => ({ ...state, email: email }));
        },
        password: (e) => {
            const password = e.target.value;
            return setSignUpInfo((state) => ({ ...state, password: password }));
        },
        name: (e) => {
            const password = e.target.value;
            return setSignUpInfo((state) => ({ ...state, password: password }));
        }
    };

    let settingLogInValueFunction = {
        email: (e) => {
            const email = e.target.value;
            return setLoginInfo((state) => ({ ...state, email: email }));
        },

        password: (e) => {
            const password = e.target.value;
            return setLoginInfo((state) => ({ ...state, password: password }))
        },
    };

    const LoginBtnOnclick = () => {
        login_process(logInInfo)

        handleLoginModalClose();
        setLoginInfo({
            email: "",
            password: "",
        });
    };
    const SignupBtnOnclick = () => {
        signup_process(signUpInfo)


        handleLoginModalClose();
        setSignUpInfo({
            email: "",
            password: "",
        });

    };




    const logOutOnClick = () => {
        logout_process()
        navigate('/')
    }
    //!SECTION

    return (
        <>
            {
                logined ?
                    <LoginBtnBox>
                        <CategoryBox login onClick={logOutOnClick}>로그아웃</CategoryBox>
                    </LoginBtnBox>
                    :
                    <LoginBtnBox>
                        <CategoryBox login onClick={doingLogin}>로그인</CategoryBox>
                        <Modal
                            open={openLoginModal}
                            onClose={handleLoginModalClose}
                        >
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '55%',
                                bgcolor: 'background.paper',
                                boxShadow: 24,
                                borderRadius: '5px',
                                p: 4,
                                overflow: 'auto',
                                maxHeight: ' 80%'
                            }}>
                                <Row>
                                    <Col span={12} style={{ borderBottom: "2px solid #393939" }}>
                                        <Row>
                                            <Col span={6}>
                                                <SelectLoginSign isSelect={(isSelectLoginSignup === "login" ? true : false)} onClick={selectLogin}>
                                                    로그인
                                                </SelectLoginSign>
                                            </Col>
                                            <Col span={6}>
                                                <SelectLoginSign isSelect={(isSelectLoginSignup === "signup" ? true : false)} onClick={selectSignup}>
                                                    회원가입
                                                </SelectLoginSign>
                                            </Col>
                                        </Row>
                                    </Col>

                                    {
                                        isSelectLoginSignup === "login" ?
                                            <Col span={12} style={{ marginTop: "1.5rem" }}>
                                                <Typo size={'1.5rem'} color={"#414141"} weight={"bold"}>아이디로 로그인</Typo>
                                                <Row justify={"space-between"}>
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
                                                    <Col span={12} style={{ marginTop: "1.5rem" }}>
                                                        <Typo size={'1.5rem'} color={"#414141"} weight={"bold"}>소셜계정으로 로그인</Typo>

                                                        <SnsLoginBtn naver>
                                                            <SnsIconWrapper >
                                                                <img src={naverBtn} alt="NAVER" width={"95%"} />

                                                            </SnsIconWrapper>
                                                            <Typo cursor={"pointer"} width={"inherit"} padding={"0 0 0 5px"} textAlign={"center"} size={"1.2rem"}>네이버로 로그인</Typo>
                                                        </SnsLoginBtn>
                                                        <SnsLoginBtn >
                                                            <SnsIconWrapper >
                                                                <img src={kakaoBtn} alt="KAKAO" width={"98%"} />

                                                            </SnsIconWrapper>
                                                            <Typo width={"inherit"} padding={"0 0 0 5px"} textAlign={"center"} size={"1.2rem"}>카카오톡으로 로그인</Typo>
                                                        </SnsLoginBtn>
                                                    </Col>

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
                                                <Typo size={'1.5rem'} color={"#414141"} weight={"bold"}>회원가입하기</Typo>
                                                <Row justify={"space-between"}>
                                                    <Col span={12} >
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

                                                    </Col>
                                                </Row>
                                            </Col>
                                    }
                                </Row>



                            </Box>
                        </Modal>
                        <CategoryBox login onClick={doingSignup} >회원가입</CategoryBox>
                    </LoginBtnBox>
            }




            <IconHeader>
                <Image src={headerIcon} width={'13rem'} cursor={"pointer"} onClick={() => { navigate("/") }} />


            </IconHeader>
            <CategoryHeader>
                <Row align={"center"} >
                    <Col xs={1} sm={1} md={0} align={"center"}>
                        <Image src={HamburgerIcon} width={"25px"} padding={"0 10px 0 0 "} />
                    </Col>
                    <Col xs={0} sm={0} md={2} span={2} align={"center"}>
                        <Image src={HamburgerIcon} width={"2.5rem"} padding={"0 10px 0 0 "} />
                        <Typo size={"1.2rem"} fontFamily={"tway"} color={"#545454"}>카테고리</Typo>
                    </Col>
                    <Col xs={10} sm={10} md={9} lg={9} xl={9} xxl={8} span={8} justify={"space-evenly"}>
                        <CategoryBox>라이브커머스</CategoryBox>
                        <CategoryBox>인기상품</CategoryBox>
                        <CategoryBox>지역특산물</CategoryBox>
                        <CategoryBox>큐레이션</CategoryBox>
                        <CategoryBox red>고객센터</CategoryBox>
                    </Col>

                </Row>
            </CategoryHeader>

        </>

    )

}

export default HeaderContent