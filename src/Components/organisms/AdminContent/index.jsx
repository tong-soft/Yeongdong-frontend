import React from "react"
import { Row, Col, ContentStyle } from "../../../layout"
import { Image, Typo, Btn } from "../../index"
import youngdongIcon from "../../../assets/icons/youngdongHeaderIcon.png"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AdminDesc from "../../molecules/AdminContent/AdminDesc"
import AddGoods from "../../molecules/AdminContent/Goods/AddGoods"
import SetGoods from "../../molecules/AdminContent/Goods/SetGoods"
import OrderManage from "../../molecules/AdminContent/Order/orderManage"
import InquiryManage from "../../molecules/AdminContent/Inquiry/InquiryManage"

const NavList = styled.div`
margin : 0 0.5rem;
    display : flex;
    gap : 5px;
    justify-content: flex-start;
    align-items: center;
    width : auto;
    height : 3.2rem;
    padding-right : 10px;
    font-size: 1.3rem;
    color : rgb(33, 43, 54);
    cursor : pointer;
    box-sizing: border-box;
    border-bottom : 4px solid #ffffff;
    /* font-weight: 700; */
    letter-spacing: -1px;

    &:hover {
        font-weight: 700;
        color: rgb(0, 0, 0);
    }
    &:active{
        font-weight: 700;
        border-bottom : 4px solid #ffec45a4;
    }
    ${props => props.isSelect ?
        `color: rgb(0,0,0);
        border-bottom : 4px solid #ffec45a4;
        border-radius : 4px;
        font-weight: 700;

        `
        : null}
`






const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    position:sticky;
    top : 0 ;
    right : 0;
    left : 0;
    justify-content: ${props => props.justify || `space-between`};
    height: ${props => props.height || `6rem`} ;
    padding : ${props => props.padding || `0 2rem`};
    background-color: #ffffff;
    border-bottom: 1px solid rgb(238, 238, 238);
`
const HeaderDetailWrapper = styled(HeaderWrapper)`
/* height:auto;  */
z-index : 20;
min-height: 5rem;
display: flex;
top:6rem;
justify-content:center;
 padding:1rem ;
  gap:1rem;
  transition: all 0.3s ease;
      ${props => props.open ? null : `
    min-height : 0;
    height : 0;
    padding : 0;
    visibility: hidden;
        `};
`
const DetailCloseBtn = styled.div`
right : 0;
position : absolute;
padding:1rem ;
cursor : pointer;
`


const CartContent = ({
    role, name, logined,

    focusNavList, navListOnClick, isHeaderDetailOpen, menu,
    headerDetailOpenHandler
}) => {

    const navigate = useNavigate();

    return (
        <>
            <HeaderWrapper position={"sticky"} style={{
                transition: 'all 0.3s ease-in-out',
                zIndex: '20',
            }} >
                <Row align={"center"} justify={"space-between"}>
                    <Col span={2} align={"center"}>
                        <Image onClick={() => { navigate('/') }} cursor={"pointer"} src={youngdongIcon} width={"11rem"} ></Image>
                    </Col>
                    <Col xs={8} span={7} align={"center"} justify={"space-evenly"}>
                        <NavList isSelect={(focusNavList === "상품 관리" ? true : false)} onMouseEnter={() => navListOnClick("상품 관리")} >
                            <Typo size={"1.8rem"}>📦 </Typo>상품 관리
                        </NavList>
                        <NavList isSelect={(focusNavList === "주문 관리" ? true : false)} onMouseEnter={() => navListOnClick("주문 관리")}>
                            <Typo size={"1.8rem"}>🛍️</Typo>주문 관리
                        </NavList>
                        <NavList isSelect={(focusNavList === "QnA 관리" ? true : false)} onMouseEnter={() => navListOnClick("QnA 관리")}>
                            <Typo size={"1.8rem"}>🤔</Typo>QnA 관리
                        </NavList>
                    </Col>
                    <Col xs={0} span={2}>
                        <Typo size={"1.2rem"} ><b>MODE</b> | 관리자 </Typo>
                    </Col>
                </Row>
            </HeaderWrapper>
            {/* {
                isHeaderDetailOpen ? */}
            <HeaderDetailWrapper open={isHeaderDetailOpen}>
                {
                    focusNavList === "상품 관리" ?
                        <>
                            <Btn types={"text"} value={"상품 관리하기"} onClick={() => (navigate('/admin/setgood'))}></Btn>
                            <Btn types={"primary"} value={"상품 추가"} onClick={() => (navigate('/admin/addgood'))}></Btn>
                        </> : null
                }

                {
                    focusNavList === "주문 관리" ?
                        <>
                            <Btn types={"text"} value={"주문확인하기"} onClick={() => (navigate('/admin/orderManage'))}></Btn>
                        </> : null
                }
                {
                    focusNavList === "QnA 관리" ?
                        <>
                            <Btn types={"text"} value={"전체 QnA"} onClick={() => navigate('/admin/inquiry')}></Btn>
                        </> : null

                }
                <DetailCloseBtn onClick={headerDetailOpenHandler} >
                    <KeyboardArrowUpIcon style={{ fontSize: "2.2rem" }} />
                </DetailCloseBtn>
            </HeaderDetailWrapper>
            {/* : null
            } */}



            <ContentStyle style={{ color: "#898e92" }} >

                {
                    menu === undefined ?
                        <AdminDesc />
                        : null
                }
                {/* //SECTION - 상품관리 */}
                {
                    menu === `addgood` ?
                        <AddGoods />
                        : null
                }
                {
                    menu === `setgood` ?
                        <SetGoods />
                        : null
                }
                {/* //!SECTION - 상품관리 */}

                {/* //SECTION - 주문관리 */}
                {
                    menu === `orderManage` ? <OrderManage />
                        : null
                }
                {/* //!SECTION - 주문관리 */}

                {/* //SECTION - QnA관리 */}
                {
                    menu === `inquiry` ? <InquiryManage />
                        : null
                }
                {/* //!SECTION - QnA관리 */}
            </ContentStyle>


        </>
    )


}

export default CartContent