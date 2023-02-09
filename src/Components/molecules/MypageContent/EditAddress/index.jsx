import React from "react"
import { Row, Col, } from "../../../../layout"
import { Typo, Btn, Divider, TextBox, } from "../../../index"
import DaumPostcode from 'react-daum-postcode';
import styled from "styled-components"




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



const editAddress = ({
    myInfo,
    openKakaoMapOnClick,
    editDetailAddress,
    saveAddressOnClick,
    isOpenKakaoMap,
    selectAddressHandle,
    editMyInfo,

}) => {

    return (

        <>
            <Col span={12} align={'center'} style={{ marginTop: "3rem", }}>
                <Row justify={"space-between"}>
                    <Col span={10} align={"center"}>
                        <Row align={"center"} >
                            <Col span={12}>
                                <Typo fontFamily={'Noto'} size={"2rem"} weight={"500"} color={'rgb(51,51,51)'} >
                                    회원정보
                                </Typo>
                            </Col>
                            <Col span={12}>
                                <Typo fontFamily={'Noto'} size={"1.1rem"} weight={"500"} color={'rgb(153, 153, 153)'}  >
                                    회원정보는 네이버에서 제공받았습니다.
                                </Typo>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>

            <Col span={12} style={{ marginTop: "1rem" }}>
                <Row >
                    <Divider color={'rgb(51,51,51)'} marginBottom={'0'} marginTop={'0'} borderWidth={'2px'} />

                    <Col span={12}>
                        <Row style={{ height: "5rem" }}>
                            <Col span={4} justify={"center"} align={"center"} style={{ height: "inherit", backgroundColor: '#fafafb' }}>
                                <Typo size={"1.2rem"} weight={'bold'} color={'rgb(51, 51, 51)'}>이름</Typo>
                            </Col>
                            <Col span={8} justify={"flex-start"} align={"center"} style={{ height: "inherit", paddingLeft: "1rem" }}>
                                <Typo size={"1.2rem"} weight={'bold'} color={'rgb(51, 51, 51)'}>{myInfo.name} </Typo>
                            </Col>
                        </Row>
                        <Divider color={'rgb(242, 242, 242)'} marginBottom={'0'} marginTop={'0'} />
                    </Col>
                    <Col span={12}>
                        <Row style={{ height: "5rem" }}>
                            <Col span={4} justify={"center"} align={"center"} style={{ height: "inherit", backgroundColor: '#fafafb' }}>
                                <Typo size={"1.2rem"} weight={'bold'} color={'rgb(51, 51, 51)'}>휴대폰</Typo>
                            </Col>
                            <Col span={8} justify={"flex-start"} align={"center"} style={{ height: "inherit", paddingLeft: "1rem" }}>
                                <Typo size={"1.2rem"} weight={'bold'} color={'rgb(51, 51, 51)'}>{myInfo.phoneNumber} </Typo>

                            </Col>
                        </Row>
                        <Divider color={'rgb(242, 242, 242)'} marginBottom={'0'} marginTop={'0'} />
                    </Col>
                    <Col span={12}>
                        <Row style={{ height: "5rem" }}>
                            <Col span={4} justify={"center"} align={"center"} style={{ height: "inherit", backgroundColor: '#fafafb' }}>
                                <Typo size={"1.2rem"} weight={'bold'} color={'rgb(51, 51, 51)'}>이메일</Typo>
                            </Col>
                            <Col span={8} justify={"flex-start"} align={"center"} style={{ height: "inherit", paddingLeft: "1rem" }}>
                                <Typo size={"1.2rem"} weight={'bold'} color={'rgb(51, 51, 51)'}>{myInfo.email} </Typo>
                            </Col>
                        </Row>
                    </Col>
                    <Divider color={'rgb(51,51,51)'} marginBottom={'0'} marginTop={'0'} borderWidth={'2px'} />
                </Row>
            </Col>

            {/*  🌀🌀🌀🌀❔❔❔❔❔🌀🌀🌀🌀❔❔❔❔❔🌀🌀🌀🌀❔❔❔❔❔🌀🌀🌀🌀❔❔❔❔❔🌀🌀🌀🌀❔❔❔❔❔🌀🌀🌀🌀❔❔❔❔❔🌀🌀🌀🌀❔❔❔❔❔🌀🌀🌀🌀❔❔❔❔❔🌀🌀🌀🌀❔❔❔❔❔ */}

            <Col span={12} align={'center'} style={{ marginTop: "3rem", }}>
                <Row justify={"space-between"} align={'center'}>
                    <Col span={7} align={"center"}>
                        <Row align={"center"} >
                            <Col span={12}>
                                <Typo fontFamily={'Noto'} size={"2rem"} weight={"500"} color={'rgb(51,51,51)'} >
                                    주소지 정보
                                </Typo>
                            </Col>
                            <Col span={12}>
                                <Typo fontFamily={'Noto'} size={"1.1rem"} weight={"500"} color={'rgb(153, 153, 153)'}  >
                                    주소지를 관리하고 변경할 수 있습니다.
                                </Typo>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={5} align={'center'} justify={'flex-end'}>

                        {
                            myInfo.jibunAddress ?
                                <Btn onClick={openKakaoMapOnClick} types={'text'} value={'주소지 수정'}></Btn>

                                :
                                <Btn onClick={openKakaoMapOnClick} types={'text'} value={'새 주소지 추가'}></Btn>

                        }
                        {editDetailAddress ?
                            <Btn onClick={saveAddressOnClick} types={"primary"} value={'저장하기'} style={{ marginLeft: "1rem" }} ></Btn>
                            : null

                        }


                    </Col>
                </Row>
            </Col>

            <Col span={12} style={{ marginTop: "1rem" }}>
                <Row >
                    {
                        (!myInfo.jibunAddress) ?
                            <>
                                <Divider color={'rgb(51,51,51)'} marginBottom={'0'} marginTop={'0'} borderWidth={'2px'} />

                                <Row gutter={[5, 0]}>
                                    <Col xs={12} sm={12} span={12} style={{ padding: '2rem 0' }}>
                                        <Typo size={'1.3rem'} >주소지를 추가해 주세요.</Typo>
                                    </Col>
                                </Row>
                                <Divider color={'rgb(51,51,51)'} marginBottom={'0'} marginTop={'0'} borderWidth={'2px'} />

                            </>
                            :
                            null
                    }
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

                            <>
                                {
                                    (myInfo.jibunAddress) ?
                                        <>
                                            <Divider color={'rgb(51,51,51)'} marginBottom={'0'} marginTop={'0'} borderWidth={'2px'} />

                                            <Row style={{ margin: "1rem 0" }} gutter={[5, 0]}>
                                                <Col xs={12} sm={12} span={12}>
                                                    <Typo size={"1rem"} color={"#666666"} full >우편번호</Typo>
                                                    <Typo size={"1.3rem"} weight={"500"}>{myInfo.zipCode}</Typo>
                                                </Col>
                                                <Col xs={12} sm={12} span={12}>
                                                    <Typo size={"1rem"} color={"#666666"} full >기본주소</Typo>
                                                    <Typo size={"1.3rem"} weight={"500"}>{myInfo.jibunAddress}</Typo>
                                                </Col>
                                                <Col xs={12} sm={8} span={7}>
                                                    <Typo size={"1rem"} color={"#666666"} full padding={"0 0 3px 0"}>상세주소</Typo>
                                                    {
                                                        editDetailAddress ?
                                                            <SearchWrapper>
                                                                <TextBox value={myInfo.detailAddress || ''} onChange={editMyInfo.detailAddress} placeholder={"상세주소를 입력해 주세요"}></TextBox>
                                                            </SearchWrapper>
                                                            :
                                                            <Typo size={"1.3rem"} weight={"500"}>{myInfo.detailAddress}</Typo>
                                                    }
                                                </Col>
                                            </Row>
                                            <Divider color={'rgb(51,51,51)'} marginBottom={'0'} marginTop={'0'} borderWidth={'2px'} />

                                        </>
                                        :
                                        null
                                }

                            </>
                    }

                </Row>
            </Col>

        </>


    )
}


export default editAddress;