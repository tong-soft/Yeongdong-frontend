import React from "react"
import { Row, Col, ContentStyle } from "../../../layout"
import { Image, Typo, Btn, Divider, CheckBox, TextBox } from "../../index"

import { useParams } from "react-router-dom"
import styled from "styled-components"
import goods from "../../../mocks/lists"
import Payment from "../../molecules/Payment"
import DaumPostcode from 'react-daum-postcode';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom"



const SearchWrapper = styled.div`
    display : flex;
    align-items: center;
    justify-content: space-between;
    width : 100%;
    height : 3rem;
    padding-left :1rem ;
    background-color: #f5f5f5;
    border-radius: 6px;
    box-shadow : rgb(247 247 247) 0px 0px 0px 1px inset;
    font-size : 1.2rem;
    font-weight: 500;
`


const OrderContent = ({
    role, name = "비회원", logined,
    product, deliveryFee,
    buyerInfo, //buyer Info / 주문자 정보
    editBuyerInfo,
    isCheckedAddrInfo,

    checkedAddrOnchange,
    adrrInfo,
    editAdrrInfo,
    isOpenKakaoMap,
    openKakaoMapOnClick,
    selectAddressHandle,
    totalProductCost,
    totalPaymentCost,
    totalDiscountCost,
    paymentData,

    deliveryMemoObj,
    memo,
    onMemoChange,
    writeMemo,
    onWriteMemoChange,
}) => {
    const navigate = useNavigate();

    /**
        * @description 주문관련 path
        * @param  {checkout} checkout - 주문서 
        * @param  {complete} complete - 주문완료 
    */
    const { params } = useParams();




    const monkGood = goods[0]

    return (
        <>

            <ContentStyle>
                {/* SECTION 주문서 */}
                {params === 'checkout' ?
                    <Row justify={'center'}>
                        <Col span={12} justify={'center'}>
                            <Typo size={"2rem"} weight={"500"}>{name}님의 주문서</Typo>
                        </Col>
                        <Col span={9} justify={'center'} style={{ marginTop: "2rem" }}>
                            <Row>

                                {/* //SECTION 주문 상품 */}
                                <Col span={12} style={{ marginTop: "2rem" }}>
                                    <Typo weight={"500"} padding={"1rem 0"} size={"1.7rem"} >주문 상품</Typo>
                                    <Row align={"center"} justify={"space-between"} style={{ borderTop: "1px solid rgb(51, 51, 51)", paddingTop: "1rem" }}  >
                                        {
                                            product.map((products, index) => {
                                                return (
                                                    <Col span={12} key={index} style={{ padding: "0.5rem 0" }}>
                                                        <Row align={'center'} justify={"space-between"}>
                                                            <Col xs={3} span={2}>



                                                                {
                                                                    products.thumbnailImg ?
                                                                        <Image src={require(`../../../mocks/${products.thumbnailImg}.jpg`)} width={"80%"} height={"fit-content"} />
                                                                        : <Image src={monkGood.img} width={"80%"}></Image>
                                                                }

                                                            </Col>
                                                            <Col xs={4} span={6} style={{ padding: "0 1rem" }} >
                                                                <Typo size={"1.2rem"} weight={"400"} >{products.name}</Typo>
                                                            </Col>
                                                            <Col xs={5} span={4} justify={"space-between"} align={"center"}>
                                                                <Col span={6} justify={"center"}>
                                                                    <div style={{ display: "flex", flexDirection: "column", padding: "0 1rem" }}>
                                                                        <Typo size={"1.2rem"} weight={"700"} color={"#333333"} >{products.orderCount}&nbsp;개</Typo>
                                                                    </div>
                                                                </Col>
                                                                <Col span={6} justify={"flex-end"} align={"center"}>
                                                                    {
                                                                        products.sellingPrice === products.originalPrice ?
                                                                            <Typo size={"1.2rem"} weight={"700"} color={"#333333"} >{products.sellingPrice.toLocaleString()}&nbsp;원</Typo>
                                                                            :


                                                                            <div style={{ display: "flex", alignItems: "flex-end", flexDirection: "column", position: "relative", width: "auto" }}>
                                                                                <Typo color={"#b5b5b5"} style={{ textDecorationLine: "line-through", position: "absolute", top: "-1.5rem", left: "0px" }} >{products.orderCount * products.originalPrice}</Typo>
                                                                                <Typo size={"1.2rem"} weight={"700"} color={"#333333"} >{products.orderCount * products.sellingPrice}&nbsp;원</Typo>
                                                                            </div>
                                                                    }
                                                                </Col>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                )
                                            })
                                        }



                                    </Row>

                                </Col>
                                {/* //!SECTION 주문 상품 */}

                                {/* SECTION 주문자 정보 */}
                                <Col span={12} style={{ marginTop: '2rem' }}>
                                    <Row>
                                        <Col span={12} align={"center"} justify={"space-between"}>
                                            <Typo weight={"500"} padding={"1rem 0"} size={"1.7rem"} cursor={"default"} >주문자 정보</Typo>
                                        </Col>
                                        <Col span={12}>
                                            <Row align={"center"} justify={"space-between"} style={{ borderTop: "1px solid rgb(51, 51, 51)" }}  >
                                                <Col span={12} align={"center"} style={{ padding: "1rem 0" }}>
                                                    <Col xs={3} sm={3} span={2}>
                                                        <Typo size={"1.3rem"} weight={"500"}>이름</Typo>
                                                    </Col>
                                                    <Col xs={9} sm={6} span={5}>
                                                        <SearchWrapper>
                                                            <TextBox value={buyerInfo.name} onChange={editBuyerInfo.name} placeholder={"이름을 입력해 주세요"}></TextBox>
                                                        </SearchWrapper>
                                                    </Col>
                                                </Col>
                                                <Col span={12} align={"center"} style={{ padding: "1rem 0" }}>
                                                    <Col xs={3} sm={3} span={2}>
                                                        <Typo size={"1.3rem"} weight={"500"}>휴대폰</Typo>
                                                    </Col>
                                                    <Col xs={9} sm={6} span={5}>
                                                        <SearchWrapper>
                                                            <TextBox value={buyerInfo.phoneNumber} onChange={editBuyerInfo.phoneNumber} placeholder={"번호를 입력해 주세요"}></TextBox>
                                                        </SearchWrapper>
                                                    </Col>
                                                </Col>
                                                <Col span={12} align={"flex-start"} style={{ padding: "1rem 0" }}>
                                                    <Col xs={3} sm={3} span={2}>
                                                        <Typo size={"1.3rem"} weight={"500"}>이메일</Typo>
                                                    </Col>
                                                    <Col xs={9} sm={6} span={5}>
                                                        <Typo size={"1.2rem"}>{buyerInfo.email}</Typo>
                                                        <Typo size={"1rem"} color={"#666666"}>이메일 변경은 마이페이지에서 가능합니다.</Typo>
                                                    </Col>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>


                                </Col>
                                {/* !SECTION 주문자 정보 */}
                                {/* SECTION 배송 정보 */}
                                <Col span={12} style={{ marginTop: '2rem' }}>
                                    <Row>
                                        <Col span={12} justify={"space-between"}>
                                            <Typo weight={"500"} padding={"1rem 0"} size={"1.7rem"} >배송지 정보</Typo>
                                            <label style={{ verticalAlign: "middle", cursor: "pointer", display: "flex", alignItems: "center" }}>
                                                <CheckBox checked={isCheckedAddrInfo} onChange={checkedAddrOnchange} size={"1.3rem"} marginRight={"0.5rem"} />
                                                <span style={{ fontSize: "1rem", fontWeight: "500" }}>
                                                    주문자 정보 기입
                                                </span>
                                            </label>
                                        </Col>

                                        <Col span={12}>
                                            <Row align={"center"} justify={"space-between"} style={{ borderTop: "1px solid rgb(51, 51, 51)" }}  >
                                                <Col span={12} align={"center"} style={{ padding: "1rem 0" }}>
                                                    <Col xs={3} sm={3} span={2}>
                                                        <Typo size={"1.3rem"} weight={"500"}>수령인</Typo>
                                                    </Col>
                                                    <Col xs={9} sm={6} span={5}>
                                                        <SearchWrapper>
                                                            <TextBox value={adrrInfo.adrrName} onChange={editAdrrInfo.adrrName} placeholder={"이름을 입력해 주세요"}></TextBox>
                                                        </SearchWrapper>
                                                    </Col>
                                                </Col>
                                                <Col span={12} align={"center"} style={{ padding: "1rem 0" }}>
                                                    <Col xs={3} sm={3} span={2}>
                                                        <Typo size={"1.3rem"} weight={"500"}>휴대폰</Typo>
                                                    </Col>
                                                    <Col xs={9} sm={6} span={5}>
                                                        <SearchWrapper>
                                                            <TextBox value={adrrInfo.adrrPhone} onChange={editAdrrInfo.adrrPhone} placeholder={"-없이 번호만 입력해 주세요"}></TextBox>
                                                        </SearchWrapper>
                                                    </Col>
                                                </Col>
                                                <Col span={12} align={"flex-start"} style={{ padding: "1rem 0" }}>
                                                    <Col xs={3} sm={3} span={2}>
                                                        <Typo size={"1.3rem"} weight={"500"}>배송 주소</Typo>
                                                    </Col>
                                                    <Col xs={9} sm={9} span={10}>
                                                        <Btn types={'primary'} onClick={openKakaoMapOnClick} value={"주소 찾기"}></Btn>

                                                        {
                                                            adrrInfo.addrAddress && adrrInfo.addrZoneCode ?
                                                                <Row style={{ marginTop: "1rem" }} gutter={[5, 0]}>
                                                                    <Col xs={12} sm={12} span={12}>
                                                                        <Typo size={"1rem"} color={"#666666"} full >우편번호</Typo>
                                                                        <Typo size={"1.3rem"} weight={"500"} >{adrrInfo.addrZoneCode}</Typo>
                                                                    </Col>
                                                                    <Col xs={12} sm={12} span={12}>
                                                                        <Typo size={"1rem"} color={"#666666"} full >기본주소</Typo>

                                                                        <Typo size={"1.3rem"} weight={"500"} >{adrrInfo.addrAddress}</Typo>
                                                                    </Col>
                                                                    <Col xs={12} sm={8} span={7}>
                                                                        <Typo size={"1rem"} color={"#666666"} full padding={"0 0 3px 0"}>상세주소</Typo>

                                                                        <SearchWrapper>
                                                                            <TextBox value={adrrInfo.addrAddressDetail} onChange={editAdrrInfo.addrAddressDetail} placeholder={"상세주소를 입력해 주세요"}></TextBox>
                                                                        </SearchWrapper>
                                                                    </Col>


                                                                </Row>

                                                                : null
                                                        }
                                                    </Col>
                                                    {
                                                        isOpenKakaoMap ?
                                                            <Col span={12}>
                                                                <DaumPostcode
                                                                    onComplete={selectAddressHandle}  // 값을 선택할 경우 실행되는 이벤트
                                                                    autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                                                                    defaultQuery='' // 팝업을 열때 기본적으로 입력되는 검색어 
                                                                />
                                                            </Col>
                                                            :
                                                            null
                                                    }
                                                </Col>
                                                <Col span={12} align={"center"} style={{ padding: "1rem 0" }}>
                                                    <Col xs={3} sm={3} span={2}>
                                                        <Typo size={"1.3rem"} weight={"500"}>배송메모</Typo>
                                                    </Col>
                                                    <Col xs={9} sm={6} span={5}>
                                                        <Select
                                                            value={memo}
                                                            onChange={onMemoChange}
                                                            displayEmpty
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                            renderValue={(selected) => {
                                                                if (selected.length === 0) {
                                                                    return <em>배송시 요청사항을 선택해주세요.</em>;
                                                                }
                                                                return <span style={{ fontSize: "1.1rem" }}>{selected}</span>;
                                                            }}
                                                            style={{ width: "100%", height: "4rem", }}
                                                        >
                                                            {
                                                                deliveryMemoObj.map((memo, index) => (
                                                                    <MenuItem key={index} value={memo} style={{ fontSize: "1.2rem" }}>{memo}</MenuItem>

                                                                ))
                                                            }
                                                        </Select>
                                                        {
                                                            memo === `직접입력` ?
                                                                <SearchWrapper style={{ marginTop: "1rem" }}>
                                                                    <TextBox value={writeMemo} onChange={onWriteMemoChange} placeholder={"배송메모를 입력해 주세요."}></TextBox>
                                                                </SearchWrapper>
                                                                :
                                                                null
                                                        }
                                                    </Col>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>



                                </Col>
                                {/* //!SECTION 배송 정보 */}
                                {/* SECTION 최종 결제 금액 */}
                                <Col span={12} style={{ marginTop: '2rem' }}>
                                    <Row justify={"center"}>
                                        <Col span={12} justify={"flex-start"} style={{ borderBottom: "1px solid rgb(51, 51, 51)" }} >
                                            <Typo weight={"500"} padding={"1rem 0"} size={"1.7rem"} >최종 결제 금액</Typo>
                                        </Col>
                                        <Col span={12} justify={'center'} style={{ padding: '2rem 0', border: "1px solid rgb(242, 242, 242)", backgroundColor: "rgb(250, 250, 250)", marginTop: "1rem" }}>
                                            <Col xs={9} span={7}>
                                                <Row gutter={[5, 0]} align={'center'}>
                                                    <Col span={12} justify={'center'}>
                                                        <Row align={'center'}>
                                                            <Col span={6} justify={'flex-start'} >
                                                                <Typo size={"1.5rem"} weight={"400"} color={"#333333"}>총 상품금액</Typo>
                                                            </Col>
                                                            <Col justify={'flex-end'} span={6}>
                                                                <Typo size={"1.5rem"} weight={"bold"} color={"#333333"}>{totalProductCost.toLocaleString()}&nbsp;원</Typo>
                                                            </Col>
                                                        </Row>

                                                    </Col>
                                                    {
                                                        totalDiscountCost === 0 ?
                                                            null :
                                                            <Col span={12} justify={'center'}>
                                                                <Row align={'center'}>
                                                                    <Col span={6} justify={'flex-start'} >
                                                                        <Typo size={"1.5rem"} weight={"400"} color={"#333333"}>총 할인금액</Typo>
                                                                    </Col>
                                                                    <Col span={6} justify={'flex-end'} align={'center'}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" strokeWidth="2" stroke="#333333" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                            <path d="M5 12l14 0"></path>
                                                                        </svg>
                                                                        <Typo padding={'0 0 0 2px'} size={"1.5rem"} weight={"bold"} color={"#333333"}>{totalDiscountCost.toLocaleString()}&nbsp;원</Typo>
                                                                    </Col>
                                                                </Row>

                                                            </Col>
                                                    }


                                                    <Col span={12} justify={'center'}>
                                                        <Row align={'center'}>
                                                            <Col span={6} justify={'flex-start'} >
                                                                <Typo size={"1.5rem"} weight={"400"} color={"#333333"}>배송비</Typo>
                                                            </Col>
                                                            <Col span={6} justify={'flex-end'} align={'center'}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" strokeWidth="2" stroke="#333333" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                    <path d="M12 5l0 14m-7 -7l14 0"></path>
                                                                </svg>
                                                                <Typo padding={'0 0 0 2px'} size={"1.5rem"} weight={"bold"} color={"#333333"}>{deliveryFee.toLocaleString()}&nbsp;원</Typo>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Divider marginBottom={'0.5rem'} marginTop={'0.5rem'} color={'rgb(244, 244, 244)'}></Divider>
                                                    </Col>
                                                    <Col span={12} justify={'center'} align={'center'} >
                                                        <Row justify={'center'} align={'center'}>
                                                            <Col span={6} justify={'flex-start'} >
                                                                <Typo size={"1.7rem"} weight={"bold"} color={"#333333"}>총 결제금액</Typo>
                                                            </Col>
                                                            <Col justify={'flex-end'} span={6}>

                                                                <Typo size={"2rem"} weight={"900"} color={"#0d7000"}>{Number(totalPaymentCost).toLocaleString()}&nbsp;원</Typo>
                                                            </Col>
                                                        </Row>

                                                    </Col>
                                                </Row>
                                            </Col>

                                        </Col>


                                    </Row>


                                </Col>
                                {/* //!SECTION 최종 결제 금액 */}


                                {/* SECTION 결제 수단*/}
                                <Col span={12} style={{ marginTop: '2rem' }}>
                                    <Typo weight={"500"} padding={"1rem 0"} size={"1.7rem"} >결제 수단</Typo>
                                    <Row align={"center"} justify={"flex-start"} style={{ borderTop: "1px solid rgb(51, 51, 51)", paddingTop: "2rem" }}  >
                                        <Col span={12}>
                                            <Col span={3}>
                                                <Typo weight={"500"}>결제 수단 선택</Typo>
                                            </Col>
                                            <Col span={6}>
                                                <Payment paymentData={paymentData} pgValue={"kakaopay"}>
                                                </Payment>
                                            </Col>
                                        </Col>
                                        <Col span={12} style={{ marginTop: "1rem" }}>
                                            <Col span={3}>
                                            </Col>
                                            <Col span={6}>
                                                <Payment paymentData={paymentData} pgValue={"nice"}>
                                                </Payment>
                                            </Col>

                                        </Col>

                                    </Row>

                                </Col>
                                {/* //!SECTION 결제 수단*/}
                            </Row>
                        </Col>

                    </Row>
                    : null
                }
                {/* //!SECTION 주문서 */}

                {/* ⚫️⚪️⚫️🟡⚫️🟢⚫️⚫️⚪️⚫️🟡⚫️🟢⚫️⚫️⚪️⚫️🟡⚫️🟢⚫️⚫️⚪️⚫️🟡⚫️🟢⚫️⚫️⚪️⚫️🟡⚫️🟢⚫️⚫️⚪️⚫️🟡⚫️🟢⚫️⚫️⚪️⚫️🟡⚫️🟢⚫️⚫️⚪️⚫️🟡⚫️🟢⚫️⚫️⚪️⚫️🟡⚫️🟢⚫️⚫️⚪️⚫️🟡⚫️🟢⚫️ */}


                {/* SECTION 주문완료 */}
                {params === 'success' ?
                    <Row justify={"center"} align={'center'} >
                        <Col xs={12} span={8} justify={"center"} align={'center'} style={{ margin: "5rem 0" }}>
                            <Row justify={"center"} align={'center'} gutter={[10, 0]}>
                                <Col span={12} justify={"center"} align={'center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7rem" viewBox="0 0 24 24" color='#0d7000' strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg>
                                </Col>
                                <Col span={12} justify={"center"} align={'center'}>
                                    <Typo size={"2.5rem"}>{name}의 주문이 완료되었습니다.</Typo>
                                </Col>
                                <Col span={12} justify={"center"} align={'center'}>
                                    <Typo fontFamily={'Noto'} size={"1.5rem"} weight={"500"} color={'rgb(153, 153, 153)'} style={{ paddingLeft: "1rem" }} >
                                        <b style={{ color: "rgb(113, 113, 113)" }}>마이페이지 주문/배송정보</b>에서
                                    </Typo>
                                    <Typo fontFamily={'Noto'} size={"1.5rem"} weight={"500"} color={'rgb(153, 153, 153)'} style={{ paddingLeft: "1rem" }} >
                                        배송정보와 상세정보를 확인할 수 있습니다.
                                    </Typo>
                                </Col>
                                <Col span={5} justify={"flex-end"} align={'center'} style={{ marginRight: "1rem" }}>
                                    <Btn types={"text"} size={'large'} onClick={() => navigate('/mypage')}
                                        value={"주문 상세보기"}>
                                    </Btn>
                                </Col>
                                <Col span={5} justify={"flex-start"} align={'center'} >
                                    <Btn types={"primary"} size={'large'} onClick={() => navigate('/')}
                                        value={"쇼핑 계속하기"}>

                                    </Btn>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    : null
                }
                {/* //!SECTION 주문완료 */}


            </ContentStyle>

        </>
    )



}

export default OrderContent