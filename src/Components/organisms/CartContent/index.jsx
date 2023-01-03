import React, { useEffect, useState } from "react"
import { Row, Col, ContentStyle } from "../../../layout"
import { Image, Typo, Btn, Divider, CheckBox, } from "../../index"
import counselingExp from "../../../assets/images/counselingExp.png"
import inquiryIcon from "../../../assets/icons/inquiryIcon.png"
import announceIcon from "../../../assets/icons/announceIcon.png"
import { Table, } from 'antd';
import { useNavigate, useParams } from "react-router-dom"

import styled from "styled-components"
import monkLists from "../../../mocks/lists"
import CloseIcon from '@mui/icons-material/Close';
import { width } from "@mui/system"

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
    ${props => props.count === 0 && props.icon === "minus" ? `
    cursor : default;
    color : #dddddd;
    `:
        null} 
    ${props => props.icon === "count" ? `
    cursor : default;
    `:
        null} 
`

const CartContent = ({
    role,
}) => {
    //NOTE - 장바구니 기본 Data
    const [cartData, setCartData] = useState([])


    useEffect(() => {
        //TODO cartData setting MonkData 
        setCartData([])
        for (let i = 0; i < 5; i++) {
            setCartData((state) => [...state, Object.assign({ cartSelected: false }, monkLists[i])])
        }
    }, []);

    //NOTE - 전체선택 
    const [isCheckedAll, setCheckedAll] = useState(false)
    const checkedAllOnchange = (e) => {
        console.log(e.target.checked)
        if (e.target.checked) {
            return setCheckedAll(true)
        }
        if (!e.target.checked) {
            return setCheckedAll(false)
        }
    }

    //NOTE - 선택 데이터
    const [checkedArr, setCheckedArr] = useState([]);

    const checkedGoodsOnchange = (e, goodsId) => {
        console.log(e.target.checked)
        if (e.target.checked) {
            console.log("checked true")
            if (checkedArr.includes(goodsId)) return null;

            setCheckedArr((state) => ([...state,
                goodsId
            ]))
        }
        if (!e.target.checked) {
            console.log("나가리")
            return setCheckedArr((state) =>
                state.filter(valueId => valueId !== goodsId)
            )
        }
    }

    // NOTE - 장바구니 제거
    const goodsDeleteIconOnClick = (goodsId) => {
        setCartData((state) => state.filter(goods => goods.id !== goodsId))
    }

    console.log(cartData)

    return (
        <>
            <ContentStyle>
                <Row justify={'center'} style={{ marginTop: "2rem" }}>
                    <Col xs={10} sm={10} md={10} lg={9} xl={9} xxl={9.5} span={9.5} align={'center'}>
                        <Row >
                            <Col span={12} justify={'flex-start'}>
                                <Typo size={'2rem'} fontFamily={'Jeju'}>장바구니</Typo>
                            </Col>
                            <Row justify={"space-between"} align={"center"} style={{ marginTop: "3rem" }}>
                                <Col span={12} align={"center"} style={{ padding: "1.5rem 0 ", borderBottom: "1px solid rgb(51, 51, 51)" }}>
                                    {/* <CheckBox defaultChecked={isCheckedAll} onChange={checkedAllOnchange}
                                        options={["전체선택"]} style={{
                                            fontSize: "1rem",
                                        }} /> */}
                                    <label style={{ verticalAlign: "middle", cursor: "pointer", display: "flex", alignItems: "center" }}>
                                        <CheckBox checked={isCheckedAll} onChange={checkedAllOnchange} size={"1.7rem"} />
                                        <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                                            전체 선택
                                        </span>
                                    </label>
                                    <div style={{ height: "1rem", borderRight: "1px solid #dddddd", margin: "0 1.5rem" }}></div>
                                    <label style={{ verticalAlign: "middle", cursor: "pointer", display: "flex", alignItems: "center" }}>
                                        <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                                            선택 삭제
                                        </span>
                                    </label>
                                </Col>
                                <Col span={12} style={{ padding: "1.5rem 0 ", borderBottom: "1px solid rgb(51, 51, 51)" }}>
                                    <Row>
                                        {
                                            cartData.map((goods, index) => {
                                                return (
                                                    <Col key={index} span={12} style={{ padding: "1rem 0" }} >
                                                        <Row align={"center"} justify={"space-between"} >
                                                            <label style={{ verticalAlign: "middle", cursor: "pointer", display: "flex", alignItems: "center" }}>
                                                                <CheckBox checked={checkedArr.includes(goods.id)} onChange={(e) => checkedGoodsOnchange(e, goods.id)} size={"1.7rem"} />
                                                            </label>
                                                            <Col span={2}>
                                                                <Image src={goods.img} width={"100%"}></Image>
                                                            </Col>
                                                            <Col span={5} style={{ padding: "0 1rem" }} >
                                                                <Typo>{goods.title}</Typo>
                                                                <Divider marginBottom={"10px"} marginTop={'10px'}></Divider>
                                                                <Typo color={"#777777"}>상품옵션</Typo>
                                                            </Col>
                                                            <Col xs={3} span={4} justify={"space-between"} align={"center"}>
                                                                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} span={6} justify={"center"}>
                                                                    <CountIconWrapper>
                                                                        <CountIcon count={0} icon={"minus"} >-</CountIcon>
                                                                        <CountIcon count={0} icon={"count"} >0</CountIcon>
                                                                        <CountIcon count={0} icon={"plus"} >+</CountIcon>
                                                                    </CountIconWrapper>
                                                                </Col>
                                                                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} span={6} justify={"center"} style={{

                                                                }}
                                                                >
                                                                    {
                                                                        goods.discountRate !== 0 ?
                                                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                                                <Typo color={"#b5b5b5"} style={{ textDecorationLine: "line-through" }} >{goods.price}</Typo>
                                                                                <Typo size={"1.2rem"} weight={"700"} color={"#333333"} >{goods.discountPrice}원</Typo>
                                                                            </div>
                                                                            :
                                                                            <Typo size={"1.2rem"} weight={"700"} color={"#333333"} >{goods.discountPrice}원</Typo>

                                                                    }
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
                        </Row>
                    </Col>
                </Row>
            </ContentStyle >
        </>
    )


}

export default CartContent