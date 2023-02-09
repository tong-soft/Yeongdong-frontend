import React from "react"

import { Row, Col } from "../../../layout"
import { Typo, Divider } from '../../index';
import CloseIcon from '@mui/icons-material/Close';


const OrderDetailModalForm = ({
    orderDetailModal,
    orderDetailData,
}) => {

    console.log("🚀 ~ orderDetailModal", orderDetailModal);

    console.log("🚀 ~ orderDetailData", orderDetailData);



    return (
        <Row gutter={[10, 0]} >
            <Col span={12} justify={'space-between'} align={'center'}>
                <Typo size={"2rem"} weight={"500"} color={'rgb(51,51,51)'} >
                    주문내역상세
                </Typo>
                <CloseIcon onClick={orderDetailModal.close} style={{ cursor: 'pointer' }} />
            </Col>
            {/* //SECTION 주문상품 */}
            <Col span={12}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typo color={'rgb(51,51,51)'} weight={'bold'} size={'1.5rem'}>
                            주문상품
                        </Typo>
                    </Col>
                    <Col span={12}>
                        <Divider marginBottom={'0.5rem'} marginTop={'0.5rem'} borderWidth={'2px'} color={'rgb(51,51,51)'}></Divider>
                    </Col>
                    <Col span={12}>
                        <Row gutter={[5, 0]} >
                            <Col span={12} justify={'center'}>
                                <Typo color={'rgb(51, 51, 51)'} weight={'bold'} size={'1.3rem'} style={{ wordBreak: 'keep-all', alignItems: "flex-end" }}>
                                    /&nbsp;
                                </Typo>
                                {
                                    orderDetailData.orderProducts.map((products, index) => {
                                        return (
                                            <Typo color={'rgb(51, 51, 51)'} weight={'bold'} size={'1.3rem'} style={{ wordBreak: 'keep-all', alignItems: "flex-end" }} key={index}>
                                                {products.productName} /&nbsp;
                                            </Typo>

                                        )
                                    })
                                }
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Col>
            {/* //!SECTION 주문상품 */}
            {/* //SECTION 주문정보 */}
            <Col span={12}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typo color={'rgb(51,51,51)'} weight={'bold'} size={'1.5rem'}>
                            주문정보
                        </Typo>
                    </Col>
                    <Col span={12}>
                        <Divider marginBottom={'0.5rem'} marginTop={'0.5rem'} borderWidth={'2px'} color={'rgb(51,51,51)'}></Divider>
                    </Col>
                    <Col span={12}>
                        <Row gutter={[5, 0]} >
                            <Col span={12}>
                                <Row>
                                    <Col span={4}>
                                        <Typo color={'rgb(102, 102, 102)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            주문자
                                        </Typo>
                                    </Col>
                                    <Col span={8}>
                                        <Typo color={'rgb(51, 51, 51)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            {orderDetailData.buyerName}
                                        </Typo>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row>
                                    <Col span={4}>
                                        <Typo color={'rgb(102, 102, 102)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            주문일자
                                        </Typo>
                                    </Col>
                                    <Col span={8} align={'center'}>
                                        <Typo color={'rgb(51, 51, 51)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all', alignItems: "flex-end" }}>
                                            {orderDetailData.orderDate.slice(0, 10)} ({orderDetailData.orderDate.slice(11, 19)})
                                        </Typo>

                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Col>
            {/* //!SECTION 주문정보 */}
            {/* //SECTION 결제정보 */}
            <Col span={12}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typo color={'rgb(51,51,51)'} weight={'bold'} size={'1.5rem'}>
                            결제정보
                        </Typo>
                    </Col>
                    <Col span={12}>
                        <Divider marginBottom={'0.5rem'} marginTop={'0.5rem'} borderWidth={'2px'} color={'rgb(51,51,51)'}></Divider>
                    </Col>
                    <Col span={12}>
                        <Row gutter={[5, 0]} >
                            <Col span={12}>
                                <Row>
                                    <Col span={4}>
                                        <Typo color={'rgb(102, 102, 102)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            상품금액
                                        </Typo>
                                    </Col>
                                    <Col span={8}>
                                        <Typo color={'rgb(51, 51, 51)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            {orderDetailData.orderPrice.toLocaleString()} 원
                                        </Typo>
                                    </Col>
                                </Row>
                            </Col>
                            {/* <Col span={12} >
                                <Row>
                                    <Col span={4}>
                                        <Typo color={'rgb(102, 102, 102)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            배송비
                                        </Typo>
                                    </Col>
                                    <Col span={8} align={'center'}>
                                        <Typo color={'rgb(51, 51, 51)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all', alignItems: "flex-end" }}>
                                            {orderDetailData.deliveryPrice.toLocaleString()} 원
                                        </Typo>

                                    </Col>
                                </Row>
                            </Col> */}
                            <Col span={12} >
                                <Row>
                                    <Col span={4}>
                                        <Typo color={'rgb(102, 102, 102)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            결제금액
                                        </Typo>
                                    </Col>
                                    <Col span={8} align={'center'}>
                                        <Typo color={'rgb(51, 51, 51)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all', alignItems: "flex-end" }}>
                                            {orderDetailData.paymentPrice.toLocaleString()} 원
                                        </Typo>

                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Col>
            {/* //!SECTION 결제정보 */}

            {/* //SECTION 배송정보 */}
            <Col span={12}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typo color={'rgb(51,51,51)'} weight={'bold'} size={'1.5rem'}>
                            배송정보
                        </Typo>
                    </Col>
                    <Col span={12}>
                        <Divider marginBottom={'0.5rem'} marginTop={'0.5rem'} borderWidth={'2px'} color={'rgb(51,51,51)'}></Divider>
                    </Col>
                    <Col span={12}>
                        <Row gutter={[5, 0]} >
                            <Col span={12}>
                                <Row>
                                    <Col span={4}>
                                        <Typo color={'rgb(102, 102, 102)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            수령인
                                        </Typo>
                                    </Col>
                                    <Col span={8}>
                                        <Typo color={'rgb(51, 51, 51)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            {orderDetailData.orderProducts[0].recipientName}
                                        </Typo>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row>
                                    <Col span={4}>
                                        <Typo color={'rgb(102, 102, 102)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            핸드폰
                                        </Typo>
                                    </Col>
                                    <Col span={8} align={'center'}>
                                        <Typo color={'rgb(51, 51, 51)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all', alignItems: "flex-end" }}>
                                            {/* {orderDetailData.recipientPhoneNumber.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)} */}
                                            {
                                                orderDetailData.orderProducts[0] ?
                                                    String(orderDetailData.orderProducts[0].recipientPhoneNumber).replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
                                                    : null
                                            }
                                        </Typo>

                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row>
                                    <Col span={4}>
                                        <Typo color={'rgb(102, 102, 102)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            우편번호
                                        </Typo>
                                    </Col>
                                    <Col span={8}>
                                        <Typo color={'rgb(51, 51, 51)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            {orderDetailData.orderProducts[0].zipCode}
                                        </Typo>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row>
                                    <Col span={4}>
                                        <Typo color={'rgb(102, 102, 102)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            주소
                                        </Typo>
                                    </Col>
                                    <Col span={8}>
                                        <Typo color={'rgb(51, 51, 51)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            {orderDetailData.orderProducts[0].jibunAddress} {orderDetailData.orderProducts[0].detailAddress}
                                        </Typo>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row>
                                    <Col span={4}>
                                        <Typo color={'rgb(102, 102, 102)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            요청사항
                                        </Typo>
                                    </Col>
                                    <Col span={8}>
                                        <Typo color={'rgb(51, 51, 51)'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                            {orderDetailData.deliveryRequirement || '없음'}
                                        </Typo>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            {/* //!SECTION 배송정보 */}
        </Row>
    )


}

export default OrderDetailModalForm;