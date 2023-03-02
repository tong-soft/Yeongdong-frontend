import React, { useState } from "react"
import { Row, Col } from "../../../layout"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import headerIcon from "../../../assets/icons/youngdongHeaderIcon.png"
import { Image, Typo, LoginModalForm, TextBox } from "../../../Components/"
import Box from '@mui/material/Box';

import HamburgerIcon from "../../../assets/icons/hamburgerIcon.png"

import Modal from '@mui/material/Modal';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { ReactComponent as SearchIcon } from '../../../assets/svg/searchIcon.svg';

import { ReactComponent as CartIcon } from '../../../assets/svg/cartIcon.svg';
import login_process from "../../../service/auth/login_progress"
import signup_process from "../../../service/auth/signup_progress"
import logout_process from "../../../service/auth/logout_progress"




//SECTION - styledComponent
const IconHeader = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    width : 100%;
    padding: 2rem;
    box-sizing: border-box;
`

const SearchWrapper = styled.div`
    display : flex;
    align-items: center;
    justify-content: space-between;
    width : 80%;
    height : 3.5rem;
    padding-left :1rem ;
    border : 1px solid #0d7000;
    border-radius: 6px;
    box-shadow : rgb(247 247 247) 0px 0px 0px 1px inset;
    font-size : 1.2rem;
`


const IconHeaderButton = styled.div`
width : auto;
display : flex;
align-items: center;
justify-content: center;
cursor : pointer;
font-size: 1.2rem;

`
const VerticalDivider = styled.div`
    width: 1px;
    height: 1rem;
    border-right: 1px solid rgb(204, 204, 204);
    margin : 0 1rem;
    @media (max-width: 860px) {
        border : none;
    }
`


const CategoryHeader = styled.div`
    display : flex;
    align-items : center;
    width : 100%;
    height : auto;
    padding : 0 2rem;
    box-sizing: border-box;
    background-color :#c2e19d;
    position: sticky;
    top : 0;
    z-index: 20;
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
`
const LoginBtnBox = styled.div`
    display: flex;
    align-items:center;
    font-size:1rem;
    padding : 0.5rem 2rem 0.5rem 5px;
    height: auto;
    /*width:max-content;*/
    right:10px;
    position:static;
    z-index:26;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    padding-right: 2rem;
    border-bottom : 1px solid rgb(238, 238, 238);
    @media (max-width: 600px) {
        position : static;
        height : auto ;
        justify-content: space-evenly;
    }
`

const LoginValueBtn = styled.div`
    margin : 5px;
    display : flex;
    align-items : center;
    justify-content: flex-start;
    font-size : inherit;
    /* border-left : ${props => props.red ? `#e64937` : `#545454`} 2px solid; */
    padding-left: 5px;
    color : ${props => props.red ? `#e64937` : `#888888`};
    cursor : pointer;
    font-family : "nixgon";
        margin-right : 20px;
        border-left-width : 1px;
        font-weight :bold;
        @media (max-width: 600px) {
        justify-content: center;
        border : none;
        padding : 5px 10px;
        font-size : 1.5rem;
        margin-top :0px;
        margin-bottom :0px;
    }
`

const CategoryWrapper = styled.div`
    height: calc(95vh - 20rem);
    overflow-y: auto;
    position: absolute;
    display: flex;
    top : 5rem;
    margin-top: 1rem;
`
const CategoryContent = styled.div`
    position: relative;
    z-index: 21;
    min-width : 249px;
    border-bottom : 1px solid #dddddd;
    background-color: #ffffff;
    animation: 0s linear 0s 1 normal;
    box-sizing: border-box;
`
const CategoryValue = styled.div`
width : 100%;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    font-family : "Jeju";
    font-size : 1.2rem;
    color : #333333;
    padding : 15px 0px 15px 24px;
    box-sizing: border-box;
    &:hover{
        background-color:rgba(233, 233, 233, 0.3);
        color : #028000;
        font-weight:bold;
    }
`

const CategoryDetailContent = styled.div`
    position: relative;
    z-index: 21;
    min-width : 249px;
    border-bottom : 1px solid #dddddd;
    background-color: #f7f7f7;
    animation: 0s linear 0s 1 normal;
`

const CategoryDetailValue = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    font-family : "Jeju";
    font-size : 1.2rem;
    color : #333333;
    padding : 15px 0px 15px 24px;
    box-sizing: border-box;
    &:hover{
        background-color:#e9e9e9;
        color : #028000;
        font-weight:bold;
        text-decoration: underline;
        text-underline-position: under;
        text-decoration-color: #028000;
        text-decoration-thickness : 2px;
    }
`
//!SECTION



const HeaderContent = ({ logined, role, name }) => {

    //NOTE - JS
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

    /**
        * @description 마이페이지, 장바구니 클릭시 func
        */

    const IconHeaderBtnOnClick = {
        myPage: () => {
            logined ? navigate('/mypage/order') : doingLogin()
        },
        cart: () => {
            navigate('/cart');

        }
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

    //SECTION 카테고리

    //detail object
    const categoryValueDetailMonk = {
        '쌀 · 잡곡': [],
        '채소': ['잎채소', '근채류', '감자', '고구마', '마늘', '인삼',],
        '과일': ['딸기', '메론', '배', '복숭아', '사과', '샤인머스켓', '수박', '자두', '포도'],
        '감 · 곶감': ['감', '곶감'],
        '견과 · 버섯': ['밤', '호두', '표고버섯'],
        '와인': ['화이트', '레드', '로제'],
        '벌꿀': ['아카시아꿀', '밤꿀', '잡화꿀'],
        '가공식품': ['식초', '과일즙', '쨈', '조청', '호두기름'],
        '장류': ['된장', '고추장', '청국장', '막장', '간장'],
        '떡 · 간식': ['떡', '간식'],
        '기타': ['산골오징어', '산속새우젓'],

    }
    const categoryValueMonk = Object.keys(categoryValueDetailMonk)

    //카테고리 와퍼 bool
    const [isCategoryEnter, setCategoryEnter] = useState(false);
    //카테고리 value
    const [categoryValue, setCategoryValue] = useState("");
    //카테고리 세부사항
    const [isCategoryDetail, setIsCategoryDetail] = useState(false);
    //카테고리 세부사항 객체
    const [categoryValueDetail, setCategoryValueDetail] = useState([]);




    const mouseEnterHandler = () => {
        setCategoryEnter(true);
        setIsCategoryDetail(false)

    }
    const mouseLeaveHandler = () => {
        setCategoryValue("")
        setCategoryEnter(false)
    }

    const valueMouseEnterHandler = (event, value) => {
        setCategoryEnter(true);

        setCategoryValue(value)

        console.log(categoryValueDetailMonk[value])

        setCategoryValueDetail(categoryValueDetailMonk[value])
        categoryValueDetailMonk[value].length === 0 ?
            setIsCategoryDetail(false)
            :
            setIsCategoryDetail(true);

    }


    const valueMouseLeaveHandler = () => {
        console.log('mouseLeaveHandler')
    }
    //!SECTION

    //SECTION - Login
    const handleNaverLogin = () => {
        if (document && document?.querySelector("#naverIdLogin")?.firstChild && window !== undefined) {
            const loginBtn = document.getElementById("naverIdLogin")?.firstChild;
            loginBtn.click();
        }
    }
    //!SECTION - Login


    //SECTION - search
    /**
     * @description 검색 textBox value 
     * @hook useState
     */
    const [searchValue, setSearchValue] = useState('');

    /**
         * @description 검색value OnChange
         * @param event
         */
    const searchIconOnChange = (e) => {
        const search = e.target.value;
        return setSearchValue(search)
    }

    const onKeyPressSearch = (e) => {
        if (e.key === 'Enter') {
            console.log('enter')
            return navigate(`/search?keyword=${searchValue}`)
        }
    }


    /**
         * @description 검색value OnClick
         */
    const searchSubmitOnClick = () => {
        return navigate(`/search?keyword=${searchValue}`)
    }

    //!SECTION - search



    //SECTION - return JSX
    return (
        <>

            {
                logined ?

                    // SECTION - jsx 장바구니 | 로그인 | 회원가입
                    <LoginBtnBox>
                        {/* <LoginValueBtn onClick={() => navigate('/cart')} >마이페이지</LoginValueBtn> */}
                        <LoginValueBtn onClick={logOutOnClick}>로그아웃</LoginValueBtn>
                        {
                            role === 'ADMIN' ?
                                <LoginValueBtn onClick={() => { navigate("/admin") }}>관리자 페이지</LoginValueBtn>
                                :
                                null
                        }
                    </LoginBtnBox>
                    :
                    <>
                        <LoginBtnBox>
                            {
                                role === 'ADMIN' ?
                                    <LoginValueBtn onClick={() => { navigate("/admin") }}>관리자 페이지</LoginValueBtn>
                                    :
                                    null
                            }

                            <LoginValueBtn onClick={doingLogin}>로그인</LoginValueBtn>
                            <Modal
                                open={openLoginModal}
                                onClose={handleLoginModalClose}
                            >
                                <Box sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: {
                                        xs: "90%",
                                        sm: "55%",
                                        md: "55%",
                                        lg: "55%",
                                        xl: "55%",
                                    },
                                    bgcolor: 'background.paper',
                                    boxShadow: 24,
                                    borderRadius: '5px',
                                    p: 4,
                                    overflow: 'auto',
                                    maxHeight: ' 80%'
                                }}>
                                    <LoginModalForm isSelectLoginSignup={isSelectLoginSignup} selectLogin={selectLogin} selectSignup={selectSignup} handleNaverLogin={handleNaverLogin} />

                                </Box>
                            </Modal>
                            <LoginValueBtn onClick={doingSignup} >회원가입</LoginValueBtn>
                        </LoginBtnBox>
                    </>
                // !SECTION - jsx 장바구니 | 로그인 | 회원가입

            }




            <IconHeader>
                <Row align={"center"} justify={"space-between"}>
                    <Col span={2} align={"center"}>
                        <Image src={headerIcon} width={'100%'} cursor={"pointer"} onClick={() => { navigate("/") }} />
                    </Col>
                    <Col sm={6} span={7} align={"center"} justify={"center"}>
                        <SearchWrapper>
                            <TextBox value={searchValue} onChange={searchIconOnChange} onKeyPress={onKeyPressSearch} placeholder={"검색어를 입력해 주세요"}></TextBox>
                            {/* <SearchOutlinedIcon style={{ fontSize: "2rem", marginRight: "1rem", color: "#0d7000", cursor: "pointer" }} /> */}
                            <SearchIcon onClick={searchSubmitOnClick} cursor={"pointer"} color={"#0d7000"} width={"2rem"} height={"2rem"} style={{ marginRight: "1rem" }} ></SearchIcon>
                        </SearchWrapper>
                    </Col>
                    <Col sm={4} span={3} align={"center"} justify={"center"}>
                        <IconHeaderButton onClick={IconHeaderBtnOnClick.myPage}>
                            <PersonOutlineIcon style={{ fontSize: "2.5rem", color: "#545454" }}></PersonOutlineIcon>
                            <Col xs={0} span={12} >
                                <Typo size={"inherit"} color={"#000000"} >
                                    {
                                        name ? name : '마이페이지'
                                    }
                                </Typo>
                            </Col>
                        </IconHeaderButton>

                        <VerticalDivider></VerticalDivider>

                        <IconHeaderButton onClick={IconHeaderBtnOnClick.cart}>
                            <CartIcon ></CartIcon>
                            <Col xs={0} span={12} style={{ marginLeft: "5px" }}>
                                <Typo size={"inherit"} color={"#000000"} >장바구니</Typo>
                            </Col>
                        </IconHeaderButton>

                    </Col>
                </Row>
            </IconHeader>


            <CategoryHeader >
                <Row align={"center"} >
                    <Col xs={1} sm={1} md={2} span={2} align={"center"} justify={"flex-start"}  >
                        <div
                            style={{ height: "6rem", width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start", cursor: "pointer" }}
                            onClick={mouseEnterHandler}
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler}
                        >
                            <Col xs={0} sm={0} md={12} span={12}>
                                <Image src={HamburgerIcon} width={"2.5rem"} padding={"0 10px 0 0 "} />
                                <Typo size={"1.2rem"} fontFamily={"tway"} color={"#545454"}>카테고리</Typo>
                            </Col>
                            <Col xs={12} sm={12} md={0} justify={"center"} align={"center"} style={{ width: "100%" }}>
                                <Image src={HamburgerIcon} width={"3rem"} padding={"0 10px 0 0 "} cursor={"pointer"} />
                            </Col>
                        </div>
                        {
                            isCategoryEnter ?
                                <CategoryWrapper onMouseLeave={() => {
                                    setCategoryEnter(false);
                                }}>
                                    <CategoryContent>
                                        <Row style={{ overflowY: "auto", width: "247px", height: "100%", cursor: "pointer" }}>
                                            <Col span={12}>
                                                {
                                                    categoryValueMonk.length > 0 ?
                                                        categoryValueMonk.map((item, index) =>
                                                            <CategoryValue key={index} onMouseEnter={(event) => valueMouseEnterHandler(event, item)} onMouseLeave={valueMouseLeaveHandler}>{item}</CategoryValue>

                                                        )
                                                        :
                                                        null
                                                }
                                            </Col>
                                        </Row>
                                    </CategoryContent>
                                    {
                                        isCategoryDetail === true ?
                                            <>
                                                <CategoryDetailContent>
                                                    <Row style={{ overflowY: "auto", width: "247px", height: "100%", cursor: "pointer" }}>
                                                        <Col span={12}>
                                                            {
                                                                categoryValueDetail.map((item, index) => {
                                                                    return <CategoryDetailValue key={index}>{item}</CategoryDetailValue>
                                                                })

                                                            }

                                                        </Col>
                                                    </Row>

                                                </CategoryDetailContent>
                                            </>

                                            : null
                                    }
                                </CategoryWrapper>
                                :
                                null
                        }

                    </Col>
                    <Col xs={10} sm={10} md={9} lg={9} xl={9} xxl={8} span={8} justify={"space-evenly"}>
                        <CategoryBox >라이브커머스</CategoryBox>
                        <CategoryBox onClick={() => navigate("/collections")}>전체상품</CategoryBox>
                        <CategoryBox onClick={() => navigate("/collections/signature")} >시그시처</CategoryBox>
                        <CategoryBox>큐레이션</CategoryBox>
                        <CategoryBox red onClick={() => navigate("/servicecenter")}>고객센터</CategoryBox>
                    </Col>
                </Row>
            </CategoryHeader>

        </>

    )
    //!SECTION - return JSX


}

export default HeaderContent