import React from "react"
import { useNavigate } from "react-router-dom"
import { Row, Col, ContentStyle } from "../../../layout"
import { Image, Typo, Btn, Divider, } from "../../index"
import styled from "styled-components"
import EditAddress from "../../molecules/MypageContent/EditAddress";
import OrderInfo from "../../molecules/MypageContent/OrderInfo";
import InquiryCheck from "../../molecules/MypageContent/InquiryCheck"
import monkImg from "../../../assets/images/monkListImg.png"





const MenuWrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    transition: all ease .3s;
    font-size : 1.1rem;
    font-weight : 500;
    text-align : center;

    color:#a3a4a7;
    cursor: pointer;
    ${props => props.selected ? `
         font-weight: 900;
        color : #0d7000;
    `: null}
    &:hover{
        font-weight: 900;
        color : #0d7000;

    }
`



const CartContent = ({
    role, name, logined, myInfo,
    menu,
    selectedMenu, handleMenuClick, editMyInfo, detailAddressEdit,
    editDetailAddress,

    isOpenKakaoMap, openKakaoMapOnClick, selectAddressHandle, saveAddressOnClick,

    allOrderData, isOrderDetail, orderDetailModal, orderDetailData,

    pagingClick, pagingNum, totalPageNum,

    questionProduct, isQuestionModalOpen, questionModalHandler, productQuestionData, productQuestionFunc, productQuestionSaveOnClick, productQuestionOnClick,
    isDeliveryDetail, deliveryDetailModal, deliveryDetailValue, loading, setLoading,

    productMyQuestions,

    reviewModalHandler, isReviewModal, reviewData, setReviewDataFunc, uploadImgOnclick, FileBoxCloseOnclick,

}) => {

    return (
        <>
            <ContentStyle style={{ transition: 'none', padding: "5vh 2.6vw" }}>
                <Row justify={'center'}>
                    <Col span={12} justify={'center'} >
                        <Typo size={'2rem'} weight={"bold"} color={"rgb(51,51,51)"} > {name}님의 마이페이지</Typo>
                    </Col>
                    {/* //SECTION - content */}
                    <Col span={10} justify={'center'} style={{
                        marginTop: "3rem"
                    }} >
                        <Row>
                            <Col span={12} >
                                <Row>
                                    {/* 1.주문/배송정보 2.주소지수정 3.상품후기 4.문의확인  5.회원정보 */}
                                    {/* //SECTION - 메뉴 */}
                                    <Col span={12}>
                                        <Row style={{ border: "1px solid rgb(242, 242, 242)", backgroundColor: "#fafafb", padding: "3rem 0" }}>
                                            <Col span={4} justify={'center'}>
                                                <Row justify={'center'} align={'center'}>
                                                    <MenuWrapper selected={selectedMenu === '주문/배송정보'} onClick={() => { handleMenuClick(`주문/배송정보`) }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0m12 0m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0m-10 0h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
                                                        </svg>
                                                        주문/배송정보
                                                    </MenuWrapper>

                                                </Row>
                                            </Col>
                                            <Col span={4} justify={'center'}>
                                                <Row>
                                                    <Col span={12} justify={'center'} align={'center'} >
                                                        <MenuWrapper selected={selectedMenu === '주소지수정'} onClick={() => { handleMenuClick(`주소지수정`) }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.645 0 1.218 .305 1.584 .78"></path>
                                                                <path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4"></path>
                                                                <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z"></path>
                                                            </svg>
                                                            주소지수정
                                                            <br />
                                                            회원정보
                                                        </MenuWrapper>

                                                    </Col>

                                                </Row>
                                            </Col>
                                            {/* <Col span={3} justify={'center'}>
                                                <Row>
                                                    <Col span={12} justify={'center'} align={'center'} >
                                                        <MenuWrapper selected={selectedMenu === '상품후기'} onClick={() => { handleMenuClick(`상품후기`) }} >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                <path d="M19 10h-14"></path>
                                                                <path d="M5 6h14"></path>
                                                                <path d="M14 14h-9"></path>
                                                                <path d="M5 18h6"></path>
                                                                <path d="M18 15v6"></path>
                                                                <path d="M15 18h6"></path>
                                                            </svg>
                                                            상품후기
                                                        </MenuWrapper>

                                                    </Col>

                                                </Row>
                                            </Col> */}
                                            <Col span={4} justify={'center'}>
                                                <Row>
                                                    <Col span={12} justify={'center'} align={'center'} >
                                                        <MenuWrapper selected={selectedMenu === '문의확인'} onClick={() => { handleMenuClick(`문의확인`) }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path>
                                                                <path d="M12 12l0 .01"></path>
                                                                <path d="M8 12l0 .01"></path>
                                                                <path d="M16 12l0 .01"></path>
                                                            </svg>
                                                            문의확인
                                                        </MenuWrapper>
                                                    </Col>
                                                </Row>
                                            </Col>

                                        </Row>
                                    </Col>
                                    {/* //!SECTION - 메뉴 */}

                                    {/* //SECTION - 주문/배송정보 */}
                                    {
                                        menu === 'order' || !menu ?
                                            <OrderInfo
                                                allOrderData={allOrderData}
                                                orderDetailModal={orderDetailModal}
                                                isOrderDetail={isOrderDetail}
                                                orderDetailData={orderDetailData}
                                                totalPageNum={totalPageNum}
                                                pagingClick={pagingClick}
                                                pagingNum={pagingNum}

                                                isQuestionModalOpen={isQuestionModalOpen}
                                                questionModalHandler={questionModalHandler}
                                                productQuestionData={productQuestionData}
                                                productQuestionFunc={productQuestionFunc}
                                                productQuestionSaveOnClick={productQuestionSaveOnClick}
                                                productQuestionOnClick={productQuestionOnClick}
                                                questionProduct={questionProduct}


                                                isDeliveryDetail={isDeliveryDetail}
                                                deliveryDetailModal={deliveryDetailModal}
                                                deliveryDetailValue={deliveryDetailValue}
                                                loading={loading}
                                                setLoading={setLoading}
                                                reviewModalHandler={reviewModalHandler}
                                                isReviewModal={isReviewModal}
                                                reviewData={reviewData}
                                                setReviewDataFunc={setReviewDataFunc}
                                                uploadImgOnclick={uploadImgOnclick}
                                                FileBoxCloseOnclick={FileBoxCloseOnclick}
                                            />
                                            : null
                                    }

                                    {/* //!SECTION - 주문/배송정보 */}



                                    {/* //SECTION - 주소지수정 */}
                                    {
                                        menu === 'address' ?
                                            <EditAddress
                                                myInfo={myInfo}
                                                openKakaoMapOnClick={openKakaoMapOnClick}
                                                editDetailAddress={editDetailAddress}
                                                saveAddressOnClick={saveAddressOnClick}
                                                isOpenKakaoMap={isOpenKakaoMap}
                                                selectAddressHandle={selectAddressHandle}
                                                editMyInfo={editMyInfo}
                                            />
                                            : null
                                    }
                                    {/* //!SECTION - 주소지수정 */}

                                    {/* //SECTION - 문의확인 */}
                                    {
                                        menu === 'inquiry' ?
                                            <InquiryCheck
                                                productMyQuestions={productMyQuestions}
                                                totalPageNum={totalPageNum}
                                                pagingClick={pagingClick}
                                                pagingNum={pagingNum}
                                            />
                                            : null
                                    }
                                    {/* //!SECTION - 문의확인 */}


                                </Row>
                            </Col>



                        </Row>
                    </Col>
                    {/* //!SECTION - content */}

                </Row>
            </ContentStyle >
        </>
    )


}

export default CartContent