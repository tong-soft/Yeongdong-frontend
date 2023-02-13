import React, { useState, usEffect } from 'react';
import { Row, Col, } from "../../../../layout"
import { Typo, Btn, Divider, Image, QuestionModalForm, TextAreaBox, OrderDetailModalForm, ReviewModalForm } from "../../../index"
import monkImg from "../../../../assets/images/monkListImg.png"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Pagination from '@mui/material/Pagination';
import styled from "styled-components"
import { LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';





const TrackerUrl = styled.iframe.attrs((props) => ({
    src: props.src,
}))`
    min-height: 40rem;
    width: 100%;
    border: none;
    margin-bottom: 3rem;
  `;

const OrderInfo = ({
    allOrderData,
    orderDetailModal,
    isOrderDetail,
    orderDetailData,
    pagingClick, pagingNum, totalPageNum,
    questionProduct, isQuestionModalOpen, questionModalHandler, productQuestionData, productQuestionFunc, productQuestionSaveOnClick, productQuestionOnClick,
    deliveryDetailModal, isDeliveryDetail, deliveryDetailValue,
    loading, setLoading,
    isReviewModal, reviewModalHandler, reviewData, setReviewDataFunc, uploadImgOnclick, FileBoxCloseOnclick,

}) => {

    const navigate = useNavigate();

    return (

        <>
            <Col span={12} align={'center'} style={{ marginTop: "3rem", }}>
                <Row>
                    <Col span={12}>
                        <Typo fontFamily={'Noto'} size={"2rem"} weight={"500"} color={'rgb(51,51,51)'} >
                            주문/배송정보
                        </Typo>
                    </Col>
                    <Col span={12}>
                        <Typo fontFamily={'Noto'} size={"1.13\rem"} weight={"500"} color={'rgb(153, 153, 153)'}  >
                            지난 주문 기록을 확인할 수 있습니다.
                        </Typo>
                    </Col>
                </Row>
            </Col>
            <Col span={12} style={{ marginTop: "1rem" }}>
                <Divider color={'rgb(51,51,51)'} marginBottom={'0'} marginTop={'0'} borderWidth={'2px'} />
            </Col>

            <Col span={12} justify={'center'} style={{ marginTop: "1rem" }}>
                <Row >
                    {/* //SECTION 주문내역 */}

                    <Col span={12} >
                        {/* //TODO 여기서 map */}
                        {
                            allOrderData.map((orders) => {
                                return (
                                    <Row style={{ margin: " 2rem 0" }} key={orders.id}>
                                        <Col span={12} justify={'space-between'} align={'center'} style={{ padding: "0.5rem  0", borderBottom: "1px solid rgb(221, 223, 225)" }}>
                                            <Typo fontFamily={'Noto'} size={"1.4rem"} weight={"400"} color={'rgb(51,51,51)'} cursor={'default'} >
                                                <b style={{ fontSize: '1.5rem' }}>{orders.orderDate.slice(0, 10)} &nbsp; </b>{orders.orderDate.slice(11, 13)}시 {orders.orderDate.slice(14, 16)}분
                                            </Typo>
                                            <Typo fontFamily={'Noto'} size={"1.1rem"} color={'rgb(51,51,51)'} cursor={'pointer'}
                                                onClick={() => { orderDetailModal.show(orders.id) }} >
                                                주문내역 상세보기 {'>'}
                                            </Typo>
                                        </Col>
                                        {
                                            orders.orderProducts.map((products) => {
                                                return (
                                                    <Col span={12} align={'center'} style={{ padding: "1rem 0" }} key={products.productId}>
                                                        <Row align={'center'} >
                                                            <Col xs={7} span={8} >
                                                                <Row align={'center'}>
                                                                    <Col span={2.5}>
                                                                        {/* products.productThumbnailImg */}
                                                                        <Image cursor={"pointer"} src={monkImg} width={'100%'} onClick={() => navigate(`/goods/${products.productId}`)
                                                                        } ></Image>
                                                                    </Col>
                                                                    <Col span={9} style={{ paddingLeft: '1rem', height: '100%' }} align={'stretch'}>
                                                                        <Row style={{ alignContent: "space-evenly" }}>
                                                                            <Col span={12} align={'baseline'}>
                                                                                <Typo size={'1.3rem'} color={'rgb(51,51,51)'} weight={'500'} style={{ wordBreak: 'keep-all', paddingLeft: '0.5rem' }} >
                                                                                    {products.productName}
                                                                                </Typo>
                                                                            </Col>
                                                                            <Col xs={0} span={12} align={'baseline'}>
                                                                                <Typo size={'1.2rem'} color={'#9e9e9e'} style={{ paddingLeft: '0.5rem' }} >
                                                                                    {products.orderProductCount} 개
                                                                                </Typo>
                                                                            </Col>
                                                                            <Col xs={0} span={12} align={'baseline'} >
                                                                                <Typo size={'1.2rem'} color={'#9e9e9e'} style={{ paddingLeft: '0.5rem' }} >
                                                                                    {products.orderProductPrice.toLocaleString()} 원
                                                                                </Typo>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                            </Col>

                                                            <Col xs={3} span={2} justify={'center'}>
                                                                {products.deliveryStatus === "WAITING" ?

                                                                    <Typo size={'1.3rem'} color={'rgb(51,51,51)'} weight={'bold'} style={{ padding: ' 0 0.5rem', wordBreak: 'keep-all' }} >
                                                                        배송준비중
                                                                    </Typo>
                                                                    :
                                                                    <Typo onClick={() => deliveryDetailModal.show(products.deliveryCompany, products.trackingNumber)} size={'1.3rem'} color={'rgb(51,51,51)'} weight={'bold'} style={{ padding: ' 0 0.5rem', wordBreak: 'keep-all', cursor: "pointer" }} >
                                                                        배송조회
                                                                    </Typo>
                                                                }


                                                            </Col>
                                                            <Col span={2} align={"center"}>
                                                                {products.deliveryStatus === "WAITING" ?
                                                                    <Btn onClick={() => productQuestionOnClick(products.productId, products.productName)} types={'text'} width={'100%'} value={'1:1 문의'} style={{ padding: "1rem 0" }} />
                                                                    :
                                                                    <Btn onClick={() => reviewModalHandler.show(products.orderProductId, products.productName)} types={'primary'} width={'100%'} value={'후기작성'} style={{ padding: "1rem 0" }} />
                                                                }
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                )
                                            })
                                        }


                                    </Row>
                                )
                            })
                        }
                        {
                            allOrderData.length === 0 ?
                                <Col span={12} justify={'center'} style={{ padding: '5rem 0' }}>
                                    <Typo size={'1.5rem'} color={'#b5b5b5'}>주문내역이 없습니다.</Typo>
                                </Col>
                                : null
                        }
                    </Col>
                    {/* //!SECTION 주문내역 */}

                    {/* //SECTION Pagination */}
                    <Col span={12} justify={'center'} align={'center'} >
                        <Pagination count={totalPageNum} onChange={pagingClick} key={pagingNum} defaultPage={pagingNum} shape="rounded" />
                    </Col>
                    {/* //!SECTION Pagination */}

                </Row>
            </Col>
            {/* //SECTION 주문정보 상세보기 */}
            <Modal
                open={isOrderDetail}
                onClose={() => { orderDetailModal.close(); }}
            >
                <>
                    <Box sx={{
                        position: 'relative',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '70%',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '5px',
                        p: 4,
                        overflow: 'auto',
                        maxHeight: '70%',
                        padding: "2rem 3rem 3rem 3rem",
                    }}>
                        <OrderDetailModalForm
                            orderDetailModal={orderDetailModal}
                            orderDetailData={orderDetailData}
                        />
                    </Box>
                </>
            </Modal>
            {/* //!SECTION 주문정보 상세보기 */}


            {/* //SECTION - 문의 하기 모달 */}
            <Modal
                open={isQuestionModalOpen}
                closable={'true'}
                onClose={(e) => { e.stopPropagation(); questionModalHandler.close(); }}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '70%',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: '5px',
                    p: 4,
                    overflow: 'auto',
                    maxHeight: ' 80%',
                    padding: "2rem 2rem 1.3rem 2rem",
                }}>
                    <QuestionModalForm
                        productName={questionProduct.productName}
                        productQuestionData={productQuestionData}
                        productQuestionFunc={productQuestionFunc}
                        questionModalHandler={questionModalHandler}
                        productQuestionSaveOnClick={productQuestionSaveOnClick}
                    />
                </Box>
            </Modal>
            {/* //!SECTION - 문의 하기 모달 */}

            {/* //SECTION - 배송조회 모달 */}
            <Modal
                open={isDeliveryDetail}
                closable={'true'}
                onClose={(e) => { e.stopPropagation(); deliveryDetailModal.close(); }}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '70%',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: '5px',
                    p: 4,
                    overflow: 'hidden',
                    maxHeight: ' 80%',
                    padding: "2rem 2rem 1.3rem 2rem",
                }}>

                    <Row>
                        <Col span={12} justify={'flex-end'}>
                            <CloseIcon onClick={deliveryDetailModal.close} style={{ cursor: 'pointer' }} />
                        </Col>

                        <Col span={12}>
                            <Row>
                                <Col span={6}>
                                    <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "flex-end", flexDirection: "column", position: "relative", width: "auto" }}>
                                        <Typo color={"#9c9c9c"} style={{ position: "absolute", top: "-1.5rem", left: "0px", width: "7rem" }} >택배사</Typo>
                                        <Typo size={"1.2rem"} weight={"700"} color={"#333333"} >
                                            {deliveryDetailValue.deliveryCompany}
                                        </Typo>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div style={{ marginTop: "2rem", display: "flex", alignItems: "flex-end", flexDirection: "column", position: "relative", width: "auto" }}>
                                        <Typo color={"#9c9c9c"} style={{ position: "absolute", top: "-1.5rem", left: "0px", width: "7rem" }} >송장번호</Typo>
                                        <Typo size={"1.2rem"} weight={"700"} color={"#333333"} >
                                            {deliveryDetailValue.trackingNumber}
                                        </Typo>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Divider marginBottom={"10px"} marginTop={'10px'}></Divider>
                        {loading ?
                            <Col span={12} justify={"center"} >
                                <LoadingOutlined style={{ fontSize: "4rem", margin: "8rem" }} />
                            </Col>
                            : null}
                        <Col span={12} justify={"center"}>
                            <TrackerUrl onLoad={() => setLoading(false)} src={`https://tracker.delivery/#/${deliveryDetailValue.deliveryCompanyId}/${deliveryDetailValue.trackingNumber}`} />
                        </Col>
                    </Row>
                </Box>
            </Modal>
            {/* //SECTION - 배송조회 모달 */}

            {/* //SECTION - 리뷰 하기 모달 */}
            <Modal
                open={isReviewModal}
                closable={'true'}
                onClose={reviewModalHandler.close}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '70%',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: '5px',
                    p: 4,
                    overflow: 'auto',
                    maxHeight: ' 80%',
                    padding: "2rem 2rem 1.3rem 2rem",
                }}>
                    <ReviewModalForm
                        reviewData={reviewData}
                        reviewModalHandler={reviewModalHandler}
                        setReviewDataFunc={setReviewDataFunc}
                        uploadImgOnclick={uploadImgOnclick}
                        FileBoxCloseOnclick={FileBoxCloseOnclick}
                    />
                </Box>
            </Modal>
            {/* //!SECTION - 리뷰 하기 모달 */}

        </>

    )
}


export default OrderInfo;