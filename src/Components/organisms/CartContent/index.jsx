import React from "react"
import { Row, Col, ContentStyle } from "../../../layout"
import { Image, Typo, Btn, CheckBox, } from "../../index"
import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';
import monkImg from "../../../assets/images/monkListImg.png"



const CountIconWrapper = styled.div`
    border : 1px solid rgb(221, 223, 225);
    border-radius : 3px;
    display: flex;
    flex-direction: row;
`

const CountIcon = styled.div`
    width : 2rem;
    height : 2rem;
    font-size : 1.2rem;
    font-weight: bold;
    box-sizing: border-box;
    display : flex;
    justify-content : center;
    align-items : center;
    cursor : pointer;
    ${props => props.count === 1 && props.icon === "minus" ? `
    cursor : default;
    color : #dddddd;
    pointer-events: none;
    `:
        null} 
    ${props => props.icon === "count" ? `
    cursor : default;
    `:
        null} 
`

const CartContent = ({
    isCheckedAll,
    checkedAllOnchange,
    cartData,
    checkedArr,
    checkedGoodsOnchange,
    goodsDeleteIconOnClick,
    orderCountHandler,
    orderHandler,
    totalProductCost,
    totalPaymentCost,
    totalDiscountCost,
    deliveryFee,

}) => {

    return (
        <>
            <ContentStyle>
                <Row justify={'center'} style={{ marginTop: "2rem" }}>
                    <Col xs={10} sm={10} md={10} lg={9} xl={9} xxl={9.5} span={9.5} align={'center'}>
                        <Row >


                            <Col span={12} justify={'flex-start'}>
                                <Typo size={'2rem'} fontFamily={'Jeju'}>장바구니</Typo>
                            </Col>
                            <Col span={12} justify={'flex-start'}>
                                <Row justify={"space-between"} align={"center"} style={{ marginTop: "3rem" }}>
                                    <Col span={12} align={"center"} style={{ padding: "1.5rem 0 ", borderBottom: "1px solid rgb(51, 51, 51)" }}>
                                        <label style={{ verticalAlign: "middle", cursor: "pointer", display: "flex", alignItems: "center" }}>
                                            <CheckBox checked={isCheckedAll} onChange={checkedAllOnchange} size={"1.7rem"} />
                                            <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                                                전체선택
                                            </span>
                                        </label>
                                    </Col>
                                    <Col span={12} style={{ padding: "1.5rem 0 " }}>
                                        <Row >
                                            {
                                                cartData.map((goods, index) => {
                                                    return (
                                                        <Col key={index} span={12} style={{ padding: "1rem 0", }} >
                                                            <Row align={"center"} justify={"space-between"} >
                                                                <label style={{ verticalAlign: "middle", cursor: "pointer", display: "flex", alignItems: "center" }}>
                                                                    <CheckBox checked={checkedArr.includes(goods.id)} onChange={(e) => checkedGoodsOnchange(e, goods.id)} size={"1.7rem"} />
                                                                </label>
                                                                <Col span={2}>

                                                                    {
                                                                        goods.thumbnailImg ?
                                                                            <Image src={require(`../../../mocks/${goods.thumbnailImg}.jpg`)} width={"100%"} height={"fit-content"} />
                                                                            : <Image src={monkImg} width={"100%"}></Image>
                                                                    }
                                                                </Col>

                                                                <Col span={5} style={{ padding: "0 1rem" }} >
                                                                    <Col span={12}>
                                                                        <Typo size={"1.2rem"} weight={"bold"}>{goods.name}</Typo>
                                                                    </Col>
                                                                    <Col xs={0} span={12} style={{ paddingTop: "0.5rem" }}>
                                                                        <Typo color={"#777777"}>{goods.description}</Typo>

                                                                    </Col>
                                                                    {/* <Divider marginBottom={"0.5rem"} marginTop={'0.5rem'}></Divider> */}
                                                                </Col>
                                                                <Col xs={3} span={4} justify={"space-between"} align={"center"}>
                                                                    <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} span={6} justify={"center"}>
                                                                        <CountIconWrapper>
                                                                            <CountIcon count={goods.orderCount} icon={"minus"} onClick={() => { orderCountHandler.minus(goods.id, goods.orderCount) }} >-</CountIcon>
                                                                            <CountIcon icon={"count"} >{goods.orderCount}</CountIcon>
                                                                            <CountIcon icon={"plus"} onClick={() => { orderCountHandler.plus(goods.id, goods.orderCount) }}>+</CountIcon>
                                                                        </CountIconWrapper>
                                                                    </Col>
                                                                    <Col xs={12} span={0} style={{ marginTop: "1.5rem" }}>
                                                                    </Col>
                                                                    <Col xs={12} span={6} justify={"center"}>
                                                                        <Col span={6} justify={"flex-end"} align={"center"}>
                                                                            {
                                                                                goods.originalPrice === goods.sellingPrice ?
                                                                                    <Typo size={"1.2rem"} weight={"700"} color={"#333333"} >{(goods.orderCount * goods.sellingPrice).toLocaleString()}&nbsp;원</Typo>
                                                                                    :
                                                                                    <div style={{ display: "flex", alignItems: "flex-end", flexDirection: "column", position: "relative", width: "auto" }}>
                                                                                        <Typo color={"#b5b5b5"} style={{ textDecorationLine: "line-through", position: "absolute", top: "-1.5rem", left: "0px" }} >{(goods.orderCount * goods.originalPrice).toLocaleString()}</Typo>
                                                                                        <Typo size={"1.2rem"} weight={"700"} color={"#333333"} >{(goods.orderCount * goods.sellingPrice).toLocaleString()}&nbsp;원</Typo>
                                                                                    </div>
                                                                            }

                                                                        </Col>
                                                                    </Col>

                                                                </Col>
                                                                <CloseIcon style={{ color: "#ccc", cursor: "pointer" }} onClick={() => goodsDeleteIconOnClick(goods.id)} />
                                                            </Row>

                                                        </Col>
                                                    )
                                                })
                                            }

                                        </Row>
                                    </Col>
                                </Row>
                            </Col>


                            <Col span={12} style={{ padding: '2rem 0', borderBottom: '1px solid rgb(51, 51, 51)', borderTop: '1px solid rgb(51, 51, 51)' }}>
                                <Row gutter={[2, 0]} align={'center'}>
                                    <Col xs={3} span={2} justify={'center'}>
                                        <Row>
                                            <Col span={12} justify={'center'} >
                                                <Typo size={"1.1rem"} weight={"400"} color={"#333333"}>총 상품금액</Typo>
                                            </Col>
                                            <Col justify={'center'} span={12}>
                                                <Typo size={"1.5rem"} weight={"bold"} color={"#333333"}>{totalProductCost.toLocaleString()}&nbsp;원</Typo>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col xs={1.5} span={1} justify={'center'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" strokeWidth="2" stroke="#d3d7df" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M5 12l14 0"></path>
                                        </svg>
                                    </Col>
                                    <Col xs={3} span={2} justify={'center'}>
                                        <Row>
                                            <Col span={12} justify={'center'} >
                                                <Typo size={"1.1rem"} weight={"400"} color={"#333333"}>총 할인금액</Typo>
                                            </Col>
                                            <Col justify={'center'} span={12}>
                                                <Typo size={"1.5rem"} weight={"bold"} color={"#333333"}>{totalDiscountCost.toLocaleString()}&nbsp;원</Typo>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col xs={1.5} span={1} justify={'center'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" strokeWidth="2" stroke="#d3d7df" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M12 5l0 14m-7 -7l14 0"></path>
                                        </svg>
                                    </Col>
                                    <Col xs={3} span={2} justify={'center'}>
                                        <Row>
                                            <Col span={12} justify={'center'} >
                                                <Typo size={"1.1rem"} weight={"400"} color={"#333333"}>배송비</Typo>
                                            </Col>
                                            <Col justify={'center'} span={12}>
                                                <Typo size={"1.5rem"} weight={"bold"} color={"#333333"}>{deliveryFee.toLocaleString()}&nbsp;원</Typo>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col xs={0} span={1} justify={'center'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" strokeWidth="3" stroke="#0d7000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </Col>
                                    <Col xs={12} span={0} style={{ paddingTop: '2rem' }}>
                                    </Col>
                                    <Col xs={12} span={3} justify={'center'}>
                                        <Row>
                                            <Col span={12} justify={'center'} >
                                                <Typo size={"1.3rem"} weight={"bold"} color={"#333333"}>총 결제금액</Typo>
                                            </Col>
                                            <Col justify={'center'} span={12}>
                                                <Typo size={"1.7rem"} weight={"900"} color={"#0d7000"}>{totalPaymentCost.toLocaleString()}&nbsp;원</Typo>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                            </Col>

                            <Col span={12} justify={'center'} align={'center'} style={{ padding: "1.5rem 0 0 0 " }}>
                                <Btn onClick={orderHandler} types={'primary'} value={"구매하기 "} size={"large"} style={{ width: "50%", padding: "1.6rem 0", fontSize: "1.6rem", fontWeight: "bold", }}></Btn>
                            </Col>


                        </Row>
                    </Col>
                </Row>
            </ContentStyle >
        </>
    )


}

export default CartContent